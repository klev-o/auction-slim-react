import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import cookie from 'cookie'

const defaultFeatures = []

const cookies = cookie.parse(document.cookie)
const cookieFeatures = (cookies.features || '').split(/\s*,\s*/g)

const features = [...defaultFeatures, ...cookieFeatures]

ReactDOM.render(
  <React.StrictMode>
    <App features={features} />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
