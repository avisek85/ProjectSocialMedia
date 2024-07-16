import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import {Provider as AlertProvider,positions,transitions} from "react-alert"
import AlertTemplate from "react-alert-template-basic"
import store from './store.js'

const options = {
  positions : positions.BOTTOM_CENTER,
  timeout:5000,
  transitions:transitions.SCALE
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <AlertProvider template ={AlertTemplate} {...options}>
        <App />
      </AlertProvider>

    </Provider>
  </React.StrictMode>,
)
