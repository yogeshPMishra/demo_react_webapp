import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "./context/appcontext";
const elem = document.getElementById('root');

ReactDOM.createRoot(elem).render(
  <React.StrictMode>
    <BrowserRouter>
       <Provider>
          <App />
       </Provider>
    </BrowserRouter>
  </React.StrictMode>
)
