import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import allReducers from './reducers'
import { Provider } from "react-redux";
import { createStore } from 'redux'
import { getCookie } from './helpers/cookie'

const preloadedState = {
  loginReducer: !!getCookie("token")
};

const store = createStore(allReducers, preloadedState);

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)


