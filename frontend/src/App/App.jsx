import React from 'react'
import PropTypes from 'prop-types'
import './App.css'
import Home from '../Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { FeaturesProvider } from '../FeatureToggle'

function App({ features }) {
  return (
    <FeaturesProvider features={features}>
      <BrowserRouter>
        <div className="app">
          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </FeaturesProvider>
  )
}

App.propTypes = {
  features: PropTypes.array.isRequired,
}

export default App
