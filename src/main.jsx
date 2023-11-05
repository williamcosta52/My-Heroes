import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import ResetCSS from './styles/ResetCSS.jsx';
import GlobalStyle from './styles/GlobalStyle.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <ResetCSS />
    <App />
  </React.StrictMode>
);
