import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import Store from './Redux/Store'
import App from './App'
import './index.css'

// As of React 18
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={Store}>
      <App />
  </Provider>
)