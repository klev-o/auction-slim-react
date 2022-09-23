import React from 'react'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import cookie from 'cookie'
import defaultFeatures from './features'
import { mergeFeatures } from './FeatureToggle'
import { createRoot } from 'react-dom/client'

const cookies = cookie.parse(document.cookie)
const cookieFeatures = (cookies.features || '')
  .split(/\s*,\s*/g)
  .filter(Boolean)

const features = mergeFeatures(defaultFeatures, cookieFeatures)

const root = createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App features={features} />
  </React.StrictMode>
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
