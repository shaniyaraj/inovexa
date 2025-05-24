import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ReactGA from "react-ga4";

// Initialize Google Analytics
ReactGA.initialize("G-L4G2V3ZNPG"); // replace with your ID
ReactGA.send("pageview"); // tracks page view on load

const container = document.getElementById('root');
const root = createRoot(container); // createRoot instead of render
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
