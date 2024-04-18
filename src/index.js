import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Provider> */}
    {/* <PersistGate> */}
    <BrowserRouter basename="/camper-for-rent">
      <App />
    </BrowserRouter>
    {/* </PersistGate> */}
    {/* </Provider> */}
  </React.StrictMode>
);
