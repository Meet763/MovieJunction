import React from 'react';
import { createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom'; // Import ReactDOM

import App from './App';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
