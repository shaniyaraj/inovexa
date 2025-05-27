import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Analytics.css';

const Analytics = () => {
  const [analyticsData, setAnalyticsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [dateRange, setDateRange] = useState({
    startDate: '',
    endDate: ''
  });

  const fetchAnalytics = async () => {
    try {
      setLoading(true);
      const params = {};
      if (dateRange.startDate) params.startDate = dateRange.startDate;
      if (dateRange.endDate) params.endDate = dateRange.endDate;

      const response = await axios.get('http://localhost:8000/api/analytics', { params });
      setAnalyticsData(response.data);
    } catch (error) {
      console.error('Error fetching analytics:', error);
    } finally {
      setLoading(false);
    }
  };

  const syncToSheets = async () => {
    try {
      await axios.get('http://localhost:8000/api/sync-visitors');
      alert('Data synced to Google Sheets successfully!');
    } catch (error) {
      console.error('Error syncing to sheets:', error);
      alert('Error syncing data to Google Sheets');
    }
  };

  useEffect(() => {
    fetchAnalytics();
  }, []);

  const handleDateChange = (e) => {
    setDateRange({
      ...dateRange,
      [e.target.name]: e.target.value
    });
  };

  const handleFilter = () => {
    fetchAnalytics();
  };

  if (loading) {
    return <div className="analytics-loading">Loading analytics...</div>;
  }

  return (
    <div className="analytics-container">
      <h1>Website Analytics Dashboard</h1>
      
      <div className="analytics-controls">
        <div className="date-filters">
          <input
            type="date"
            name="startDate"
            value={dateRange.startDate}
            onChange={handleDateChange}
            placeholder="Start Date"
          />
          <input
            type="date"
            name="endDate"
            value={dateRange.endDate}
            onChange={handleDateChange}
            placeholder="End Date"
          />
          <button onClick={handleFilter}>Filter</button>
        </div>
        
        <button onClick={syncToSheets} className="sync-button">
          Sync to Google Sheets
        </button>
      </div>

      {analyticsData && (
        <div className="analytics-content">
          <div className="analytics-summary">
            <div className="summary-card">
              <h3>Total Visitors</h3>
              <p className="big-number">{analyticsData.totalVisitors}</p>
            </div>
          </div>

          <div className="daily-counts">
            <h3>Daily Visitor Counts</h3>
            <div className="daily-chart">
              {Object.entries(analyticsData.dailyCounts).map(([date, count]) => (
                <div key={date} className="daily-item">
                  <span className="date">{date}</span>
                  <span className="count">{count} visitors</span>
                </div>
              ))}
            </div>
          </div>

          <div className="recent-visitors">
            <h3>Recent Visitors</h3>
            <div className="visitors-table">
              <div className="table-header">
                <span>Date</span>
                <span>Time</span>
                <span>IP Address</span>
                <span>Page</span>
                <span>User Agent</span>
              </div>
              {analyticsData.recentVisitors.map((visitor, index) => (
                <div key={index} className="table-row">
                  <span>{visitor.date}</span>
                  <span>{visitor.time}</span>
                  <span>{visitor.ipAddress}</span>
                  <span>{visitor.page}</span>
                  <span className="user-agent">{visitor.userAgent.substring(0, 50)}...</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Analytics; 