import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

Amplify.configure(awsExports);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);