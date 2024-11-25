import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux'; // Import Provider from redux
import ThemeProvider1 from './utils/ThemeContext';
import { ThemeProvider } from "@material-tailwind/react";
import App from './App';
import store from './app/store';  // Import the store correctly

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Provider store={store}> 
        <ThemeProvider>
          <ThemeProvider1>
            <App />
          </ThemeProvider1>
        </ThemeProvider>
      </Provider>
    </Router>
  </React.StrictMode>
);
