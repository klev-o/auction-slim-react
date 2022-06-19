import React, { useState } from 'react'
import styles from './JoinForm.module.css'
import api, { parseError, parseErrors } from '../../Api'

function JoinForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    agree: false,
  })

  const [errors, setErrors] = useState({})
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)

  const handleChange = (event) => {
    const input = event.target
    setFormData({
      ...formData,
      [input.name]: input.type === 'checkbox' ? input.checked : input.value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!formData.agree) {
      setErrors({ agree: 'Please agree with terms.' })
      return
    }

    setErrors({})
    setError(null)
    setSuccess(null)

    api
      .post('/v1/auth/join', {
        email: formData.email,
        password: formData.password,
      })
      .then(() => {
        setSuccess('Confirm join by link in email.')
      })
      .catch(async (error) => {
        setErrors(await parseErrors(error))
        setError(await parseError(error))
      })
  }

  return (
    <div data-testid="join-form" className={styles.joinForm}>
      {error ? (
        <div className="alert error" data-testid="alert-error">
          {error}
        </div>
      ) : null}
      {success ? (
        <div className="alert success" data-testid="alert-success">
          {success}
        </div>
      ) : null}

      {!success ? (
        <form className="form" method="post" onSubmit={handleSubmit}>
          <div className={'input-row' + (errors.email ? ' has-error' : '')}>
            <label htmlFor="email" className="input-label">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email ? (
              <div className="input-error" data-testid="violation">
                {errors.email}
              </div>
            ) : null}
          </div>
          <div className={'input-row' + (errors.password ? ' has-error' : '')}>
            <label htmlFor="password" className="input-label">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            {errors.password ? (
              <div className="input-error" data-testid="violation">
                {errors.password}
              </div>
            ) : null}
          </div>
          <div className={'input-row' + (errors.agree ? ' has-error' : '')}>
            <label>
              <input
                name="agree"
                type="checkbox"
                checked={formData.agree}
                onChange={handleChange}
                required
              />
              <small>I agree with privacy policy</small>
            </label>
            {errors.agree ? (
              <div className="input-error" data-testid="violation">
                {errors.agree}
              </div>
            ) : null}
          </div>
          <div className="button-row">
            <button type="submit" data-testid="join-button">
              Join to Us
            </button>
          </div>
        </form>
      ) : null}
    </div>
  )
}

export default JoinForm
