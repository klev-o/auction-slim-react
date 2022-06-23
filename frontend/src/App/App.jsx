import React from 'react'
import PropTypes from 'prop-types'
import './App.css'
import Home from '../Home'
import Join from '../Join'
import { NotFound } from '../Error'
import Confirm from '../Join/Confirm'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { FeaturesProvider } from '../FeatureToggle'

function App({ features }) {
  return (
    <FeaturesProvider features={features}>
      <BrowserRouter>
        <div className="app">
          <Routes>
            <Route exact path="/" element={<Home />} />
            {features.includes('JOIN_TO_US') ? (
              <Route exact path="/join" element={<Join />} />
            ) : null}
            {features.includes('JOIN_TO_US') ? (
              <Route exact path="/join/confirm" element={<Confirm />} />
            ) : null}
            <Route path="*" element={<NotFound />} />
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
