# Custom Analytics System

This project now uses a custom analytics system instead of Google Analytics to track website visitors and save data directly to Google Sheets.

## 🚀 Features

- **Real-time visitor tracking** - Track every page visit with detailed information
- **IP Address tracking** - Capture visitor IP addresses
- **User Agent detection** - Track browser and device information
- **Timestamp logging** - Record exact date and time of visits
- **Page tracking** - Monitor which pages are visited
- **Referrer tracking** - See where visitors come from
- **Google Sheets integration** - Automatically save data to Google Sheets
- **Analytics dashboard** - View visitor data in a beautiful dashboard
- **MongoDB storage** - All data is stored in your own database

## 📊 Data Collected

For each visitor, the system collects:
- **Date** (YYYY-MM-DD format)
- **Time** (HH:MM:SS format)
- **IP Address** (visitor's IP)
- **User Agent** (browser/device information)
- **Page** (URL path visited)
- **Referrer** (where they came from)
- **Timestamp** (full ISO timestamp)

## 🛠️ Setup Instructions

### 1. Backend Setup

1. **Install dependencies** (if not already installed):
   ```bash
   cd Back-end
   npm install
   ```

2. **Make sure MongoDB is running**:
   ```bash
   # Start MongoDB service
   mongod
   ```

3. **Configure Google Sheets API**:
   - Copy your Google Cloud service account key to `Back-end/config/service-account-key.json`
   - Use `Back-end/config/service-account-key.example.json` as a template
   - Update the `SPREADSHEET_ID` in `server.js` if needed
   - **Important**: Never commit the actual service account key to Git!

4. **Start the backend server**:
   ```bash
   npm start
   # or for development
   npm run dev
   ```

### 2. Frontend Setup

1. **Install dependencies** (if not already installed):
   ```bash
   npm install
   ```

2. **Start the React app**:
   ```bash
   npm start
   ```

### 3. Google Sheets Setup

1. **Create a new Google Sheet** or use existing one
2. **The system will use the default "Sheet1" worksheet**
3. **The system will automatically create headers**:
   - Column A: Date
   - Column B: Time
   - Column C: IP Address
   - Column D: User Agent
   - Column E: Page
   - Column F: Referrer
   - Column G: Timestamp

## 🔧 API Endpoints

### Track Visitor
```
POST /api/track-visitor
Body: {
  "page": "/about",
  "referrer": "https://google.com"
}
```

### Get Analytics Data
```
GET /api/analytics?startDate=2024-01-01&endDate=2024-01-31
```

### Sync to Google Sheets
```
GET /api/sync-visitors
```

## 📈 Analytics Dashboard

Access the analytics dashboard at: `http://localhost:3000/analytics`

Features:
- **Total visitor count**
- **Daily visitor breakdown**
- **Recent visitors table**
- **Date range filtering**
- **Manual sync to Google Sheets**

## 🔄 Automatic Syncing

The system automatically syncs visitor data to Google Sheets:
- **Every hour** - Scheduled sync via cron job
- **Real-time** - Each visitor is immediately saved to sheets
- **Manual** - Use the dashboard or API endpoint

## 🚫 What Was Removed

- ❌ Google Analytics 4 (GA4)
- ❌ `react-ga4` dependency
- ❌ GA4 tracking codes
- ❌ GA4 API calls
- ❌ GA4 property configuration

## ✅ What Was Added

- ✅ Custom visitor tracking hook (`useCustomAnalytics`)
- ✅ Visitor data model (`Back-end/model/visitor.js`)
- ✅ Real-time tracking API (`/api/track-visitor`)
- ✅ Analytics API (`/api/analytics`)
- ✅ Google Sheets direct integration
- ✅ Analytics dashboard (`/analytics`)
- ✅ Automated hourly sync
- ✅ MongoDB data storage

## 🔒 Privacy & Data

- All visitor data is stored in **your own MongoDB database**
- Data is **not shared with third parties** (unlike Google Analytics)
- You have **full control** over the data
- **GDPR compliant** - you control data retention and deletion
- **No cookies** required for basic tracking

## 🛡️ Security Considerations

1. **IP Address Privacy**: Consider anonymizing IP addresses for privacy
2. **Data Retention**: Implement data cleanup policies
3. **Access Control**: Secure the `/analytics` dashboard in production
4. **Rate Limiting**: Consider adding rate limiting to tracking endpoints

## 🚀 Production Deployment

1. **Update API URLs** in frontend:
   ```javascript
   // In useCustomAnalytics.js and Analytics.jsx
   // Change from: http://localhost:8000
   // To: https://your-backend-domain.com
   ```

2. **Secure the analytics dashboard**:
   - Add authentication
   - Restrict access to admin users only

3. **Environment variables**:
   ```bash
   # Backend .env file
   MONGODB_URI=mongodb://localhost:27017/formdata
   GOOGLE_SHEETS_ID=your_sheet_id
   PORT=8000
   ```

## 📝 Monitoring

Monitor your analytics system:
- Check MongoDB for visitor data
- Verify Google Sheets updates
- Monitor server logs for errors
- Use the dashboard for real-time insights

## 🔧 Customization

You can customize the tracking by:
- Adding more fields to the visitor model
- Implementing IP geolocation
- Adding custom events tracking
- Creating more detailed reports
- Adding data visualization charts

## 🆘 Troubleshooting

**Common issues:**

1. **Data not saving to MongoDB**:
   - Check MongoDB connection
   - Verify server is running on port 8000

2. **Google Sheets not updating**:
   - Check service account permissions
   - Verify spreadsheet ID
   - Check API credentials

3. **Frontend not tracking**:
   - Verify backend URL in useCustomAnalytics.js
   - Check browser console for errors
   - Ensure CORS is properly configured

4. **Analytics dashboard not loading**:
   - Check API endpoints are accessible
   - Verify data exists in MongoDB
   - Check browser network tab for errors

## 📞 Support

If you need help with the custom analytics system:
1. Check the browser console for errors
2. Check server logs for backend issues
3. Verify MongoDB and Google Sheets connectivity
4. Test API endpoints manually

This custom system gives you complete control over your analytics data while providing detailed insights into your website visitors! 