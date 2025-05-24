const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { google } = require("googleapis");
const cron = require('node-cron');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/formdata", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Your existing Form schema and model
const FormSchema = new mongoose.Schema({
  name: String,
  contact: Number,
  email: String,
  company: String,
});
const Form = mongoose.model("Form", FormSchema);

// New User schema: tracks visits count per userId
const UserSchema = new mongoose.Schema({
  userId: { type: String, required: true, unique: true },
  visits: { type: Number, default: 0 },
});
const User = mongoose.model("User", UserSchema);

// Your existing form POST endpoint
app.post("/api/form", async (req, res) => {
  try {
    const form = new Form(req.body);
    await form.save();
    res.status(201).send("Form submitted");
  } catch (err) {
    res.status(400).send("Error saving data");
  }
});

//google analytics
const auth = new google.auth.GoogleAuth({
  keyFile: "service-account-key.json",
  scopes: [
    "https://www.googleapis.com/auth/analytics.readonly",
    "https://www.googleapis.com/auth/spreadsheets",
  ],
});

const GA4_PROPERTY_ID = "490361726";
const SPREADSHEET_ID = "1ZfJBnBZcKn4SG_L56xieXbmEqw5lZxWG1iEg5tM8tZY";

// Function to sync analytics data
async function syncAnalyticsData() {
  try {
    const authClient = await auth.getClient();

    const analyticsData = google.analyticsdata({
      version: "v1beta",
      auth: authClient,
    });

    const response = await analyticsData.properties.runReport({
      property: `properties/${GA4_PROPERTY_ID}`,
      requestBody: {
        dimensions: [{ name: "date" }],
        metrics: [{ name: "activeUsers" }],
        dateRanges: [{ startDate: "7daysAgo", endDate: "today" }],
      },
    });

    const rows = response.data.rows || [];
    const values = [["Date", "Active Users"]];
    rows.forEach((row) => {
      values.push([
        row.dimensionValues[0].value,
        row.metricValues[0].value,
      ]);
    });

    const sheets = google.sheets({ version: "v4", auth: authClient });
    await sheets.spreadsheets.values.update({
      spreadsheetId: SPREADSHEET_ID,
      range: "Sheet1!A1",
      valueInputOption: "RAW",
      requestBody: {
        values,
      },
    });

    console.log("Cron job: Successfully synced analytics data to Google Sheets!");
  } catch (error) {
    console.error("Cron job error:", error);
  }
}

// Schedule cron job to run every day at midnight (00:00)
cron.schedule('0 0 * * *', () => {
  console.log('Running scheduled analytics sync...');
  syncAnalyticsData();
});

app.get("/sync-analytics", async (req, res) => {
  try {
    const authClient = await auth.getClient();

    const analyticsData = google.analyticsdata({
      version: "v1beta",
      auth: authClient,
    });

    const response = await analyticsData.properties.runReport({
      property: `properties/${GA4_PROPERTY_ID}`,
      requestBody: {
        dimensions: [{ name: "date" }],
        metrics: [{ name: "activeUsers" }],
        dateRanges: [{ startDate: "7daysAgo", endDate: "today" }],
      },
    });

    const rows = response.data.rows || [];
    const values = [["Date", "Active Users"]];
    rows.forEach((row) => {
      values.push([
        row.dimensionValues[0].value,
        row.metricValues[0].value,
      ]);
    });

    const sheets = google.sheets({ version: "v4", auth: authClient });
    await sheets.spreadsheets.values.update({
      spreadsheetId: SPREADSHEET_ID,
      range: "Sheet1!A1",
      valueInputOption: "RAW",
      requestBody: {
        values,
      },
    });

    res.send("Synced analytics data to Google Sheets!");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error syncing analytics data.");
  }
});

app.listen(8000, () => console.log("Server running on http://localhost:8000"));
