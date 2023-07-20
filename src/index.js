import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import Loader from './components/Loader'; // Import the Loader component

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore } from 'redux';
import contactReducer from './redux/contactReducer';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// Create the Redux store with the contactReducer and Redux DevTools extension.
const store = createStore(contactReducer, composeWithDevTools());

const Root = () => {
  const [loading, setLoading] = useState(true);

  // Simulate loading time
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading ? (
        <Loader /> // Show the Loader while loading
      ) : (
        <Provider store={store}>
          <Router>
            <App />
          </Router>
        </Provider>
      )}
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Root />);
