const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { google } = require("googleapis");
const cron = require('node-cron');

const app = express();
app.use(cors({
origin: 'http://localhost:3000',
methods: ['POST', 'GET']
}));

app.use(express.json());

mongoose.connect("mongodb://localhost:27017/formdata");

// Your existing Form schema and model
const FormSchema = new mongoose.Schema({
  name: String,
  contact: Number,
  email: String,
  company: String,
});
const Form = mongoose.model("Form", FormSchema);

// Import Visitor model
const Visitor = require('./model/visitor');

// Helper function to get client IP
const getClientIp = (req) => {
  return req.headers['x-forwarded-for']?.split(',').shift() ||
         req.connection?.remoteAddress ||
         req.socket?.remoteAddress ||
         (req.connection?.socket ? req.connection.socket.remoteAddress : null) ||
         req.ip ||
         'Unknown';
};

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

// Google Sheets configuration for custom analytics
const auth = new google.auth.GoogleAuth({
  keyFile: "./config/service-account-key.json", // Make sure this file exists locally but is not committed
  scopes: [
    "https://www.googleapis.com/auth/spreadsheets",
  ],
});

const SPREADSHEET_ID = "1ZfJBnBZcKn4SG_L56xieXbmEqw5lZxWG1iEg5tM8tZY";

// API endpoint to track visitor
app.post("/api/track-visitor", async (req, res) => {
  try {
    const { page, referrer } = req.body;
    const ipAddress = getClientIp(req);
    const userAgent = req.headers['user-agent'] || 'Unknown';
    
    const now = new Date();
    const date = now.toISOString().split('T')[0]; // YYYY-MM-DD
    const time = now.toTimeString().split(' ')[0]; // HH:MM:SS
    
    // Save to MongoDB
    const visitor = new Visitor({
      ipAddress,
      userAgent,
      date,
      time,
      page: page || '/',
      referrer: referrer || ''
    });
    
    await visitor.save();
    
    // Also save to Google Sheets immediately
    await saveToGoogleSheets(visitor);
    
    res.status(200).json({ message: 'Visitor tracked successfully' });
  } catch (error) {
    console.error('Error tracking visitor:', error);
    res.status(500).json({ error: 'Failed to track visitor' });
  }
});

// Function to save visitor data to Google Sheets
async function saveToGoogleSheets(visitorData) {
  try {
    const authClient = await auth.getClient();
    const sheets = google.sheets({ version: "v4", auth: authClient });
    
    // Prepare data for sheets
    const values = [[
      visitorData.date,
      visitorData.time,
      visitorData.ipAddress,
      visitorData.userAgent,
      visitorData.page,
      visitorData.referrer,
      visitorData.timestamp.toISOString()
    ]];
    
    // Try to append to Sheet1 first, if it fails, we'll handle it
    try {
      await sheets.spreadsheets.values.append({
        spreadsheetId: SPREADSHEET_ID,
        range: "Sheet1!A:G",
        valueInputOption: "RAW",
        insertDataOption: "INSERT_ROWS",
        requestBody: {
          values,
        },
      });
      console.log('Visitor data saved to Google Sheets (Sheet1)');
    } catch (appendError) {
      // If append fails, try to initialize the sheet with headers first
      console.log('Initializing Google Sheet with headers...');
      const headerValues = [["Date", "Time", "IP Address", "User Agent", "Page", "Referrer", "Timestamp"]];
      
      await sheets.spreadsheets.values.update({
        spreadsheetId: SPREADSHEET_ID,
        range: "Sheet1!A1:G1",
        valueInputOption: "RAW",
        requestBody: {
          values: headerValues,
        },
      });
      
      // Now append the visitor data
      await sheets.spreadsheets.values.append({
        spreadsheetId: SPREADSHEET_ID,
        range: "Sheet1!A:G",
        valueInputOption: "RAW",
        insertDataOption: "INSERT_ROWS",
        requestBody: {
          values,
        },
      });
      console.log('Visitor data saved to Google Sheets (Sheet1) after initialization');
    }
  } catch (error) {
    console.error('Error saving to Google Sheets:', error);
  }
}

// Function to sync all visitor data to Google Sheets
async function syncVisitorDataToSheets() {
  try {
    const authClient = await auth.getClient();
    const sheets = google.sheets({ version: "v4", auth: authClient });
    
    // Get all visitors from MongoDB
    const visitors = await Visitor.find().sort({ timestamp: -1 }).limit(1000);
    
    // Prepare headers and data
    const values = [
      ["Date", "Time", "IP Address", "User Agent", "Page", "Referrer", "Timestamp"]
    ];
    
    visitors.forEach(visitor => {
      values.push([
        visitor.date,
        visitor.time,
        visitor.ipAddress,
        visitor.userAgent,
        visitor.page,
        visitor.referrer,
        visitor.timestamp.toISOString()
      ]);
    });
    
    // Clear and update sheet (using Sheet1 instead of VisitorData)
    try {
      await sheets.spreadsheets.values.clear({
        spreadsheetId: SPREADSHEET_ID,
        range: "Sheet1!A:G",
      });
    } catch (clearError) {
      console.log('Could not clear sheet, continuing with update...');
    }
    
    await sheets.spreadsheets.values.update({
      spreadsheetId: SPREADSHEET_ID,
      range: "Sheet1!A1",
      valueInputOption: "RAW",
      requestBody: {
        values,
      },
    });
    
    console.log('All visitor data synced to Google Sheets (Sheet1)');
  } catch (error) {
    console.error('Error syncing visitor data:', error);
  }
}

// Get visitor analytics
app.get("/api/analytics", async (req, res) => {
  try {
    const { startDate, endDate } = req.query;
    
    let query = {};
    if (startDate && endDate) {
      query.date = {
        $gte: startDate,
        $lte: endDate
      };
    }
    
    const visitors = await Visitor.find(query).sort({ timestamp: -1 });
    
    // Group by date for daily counts
    const dailyCounts = {};
    visitors.forEach(visitor => {
      if (dailyCounts[visitor.date]) {
        dailyCounts[visitor.date]++;
      } else {
        dailyCounts[visitor.date] = 1;
      }
    });
    
    res.json({
      totalVisitors: visitors.length,
      dailyCounts,
      recentVisitors: visitors.slice(0, 50) // Last 50 visitors
    });
  } catch (error) {
    console.error('Error getting analytics:', error);
    res.status(500).json({ error: 'Failed to get analytics' });
  }
});

// Manual sync endpoint
app.get("/api/sync-visitors", async (req, res) => {
  try {
    await syncVisitorDataToSheets();
    res.send("Visitor data synced to Google Sheets!");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error syncing visitor data.");
  }
});

// Schedule cron job to sync visitor data every hour
cron.schedule('0 * * * *', () => {
  console.log('Running scheduled visitor data sync...');
  syncVisitorDataToSheets();
});

app.listen(8000, () => console.log("Server running on http://localhost:8000"));
