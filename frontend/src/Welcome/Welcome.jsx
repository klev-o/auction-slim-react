import React from 'react'
import styles from './Welcome.module.css'
import FeatureFlag from '../FeatureToggle'

function Welcome() {
  return (
    <div data-testid="welcome" className={styles.welcome}>
      <h1>Auction Example</h1>
      <FeatureFlag not name="WE_ARE_HERE">
        <p>We will be here soon</p>
      </FeatureFlag>

      <FeatureFlag name="WE_ARE_HERE">
        <p>We are here</p>
      </FeatureFlag>
    </div>
  )
}

// Welcome.propTypes = {
//   features: PropTypes.array.isRequired,
// }

export default Welcome
