import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store/store';
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from "@auth0/auth0-react";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter> 
      <Auth0Provider 
        domain='dev-pfwsrn627lu5ojma.us.auth0.com' 
        clientId='xbZnsFOrm1ElcfPzY3FOu9EpIsqQNstH' 
        authorizationParams={{redirect_uri: window.location.origin}} >
      {/* <React.StrictMode> */}
        <App />
      {/* </React.StrictMode> */}
      </Auth0Provider> 
    </BrowserRouter>   
  </Provider>
);


