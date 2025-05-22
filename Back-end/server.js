// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");

// const app = express();
// app.use(cors());
// app.use(express.json());

// mongoose.connect("mongodb://localhost:27017/formdata", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// // const FormSchema = new mongoose.Schema({
// //   name: String,
// //   email: String,
// //   message: String,
// // });
// const FormSchema = new mongoose.Schema({
//   name: String,
//   contact: Number,
//   email: String,
//   company: String,
// });

// const Form = mongoose.model("Form", FormSchema);

// app.post("/api/form", async (req, res) => {
//   try {
//     const form = new Form(req.body);
//     await form.save();
//     res.status(201).send("Form submitted");
//   } catch (err) {
//     res.status(400).send("Error saving data");
//   }
// });

// app.listen(5000, () => console.log("Server running on http://localhost:5000"));


const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

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

// New Visit schema: logs each visit with timestamp
const VisitSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});
const Visit = mongoose.model("Visit", VisitSchema);

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

// New endpoint to track visits
app.post("/api/track-visit", async (req, res) => {
  try {
    const { userId } = req.body;
    if (!userId) return res.status(400).json({ error: "userId is required" });

    // Log the visit
    await Visit.create({ userId });

    // Update or create user visits count
    const user = await User.findOneAndUpdate(
      { userId },
      { $inc: { visits: 1 } },
      { upsert: true, new: true }
    );

    // Count total unique users
    const totalUsers = await User.countDocuments();

    res.json({ visits: user.visits, totalUsers });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Tracking failed" });
  }
});

app.listen(5000, () => console.log("Server running on http://localhost:5000"));
