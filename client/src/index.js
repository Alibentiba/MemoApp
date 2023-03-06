import React from 'react'
import {createRoot} from 'react-dom/client';
import { Provider } from 'react-redux'
import { configureStore,applyMiddleware,compose } from '@reduxjs/toolkit'
import App from './App'
import thunk from 'redux-thunk'
import reducers from './reducers/index'
import './index.css'

const store =configureStore ({reducer:reducers},compose(applyMiddleware(thunk)))
const rootElement = 
document.getElementById('root');
const root = 
createRoot(rootElement);// As of React 18
root.render(
  <Provider store={store}>
      <App />
  </Provider>,

)
