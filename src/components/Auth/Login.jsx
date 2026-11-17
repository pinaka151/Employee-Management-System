import React, { useState } from 'react'
import {
  FaArrowRight,
  FaBolt,
  FaChartLine,
  FaClipboardList,
  FaEnvelope,
  FaLock,
  FaShieldAlt,
  FaUsers,
} from 'react-icons/fa'

const Login = ({ handlelogin }) => {
  const [Email, SetEmail] = useState('')
  const [Pass, SetPassword] = useState('')

  const SubmitHandler = (e) => {
    e.preventDefault()
    handlelogin(Email, Pass)
    SetEmail('')
    SetPassword('')
  }

  return (
    <main className="login-page">
      <div className="login-brand">
        <span className="brand-mark"><FaUsers /></span>
        <span>Employee Management System</span>
      </div>

      <section className="login-content">
        <div className="login-glow" />
        <div className="hero-illustration" aria-hidden="true">
          <div className="illustration-window">
            <FaClipboardList size={58} />
            <div className="illustration-lines"><i /><i /><i /></div>
          </div>
        </div>
        <div className="hero-copy">
          <span className="eyebrow">Welcome back! <span aria-hidden="true">👋</span></span>
          <h1>Manage Your Team <span>Smarter &amp; Faster</span></h1>
          <p>A modern solution for employee and task management, built to help your team stay focused and productive.</p>
          <div className="feature-list">
            <span className="feature-chip"><FaBolt /> Boost productivity</span>
            <span className="feature-chip"><FaShieldAlt /> Secure &amp; reliable</span>
            <span className="feature-chip"><FaChartLine /> Track progress</span>
          </div>
        </div>
      </section>

      <section className="login-panel">
        <span className="brand-mark"><FaUsers /></span>
        <h2>Login to your account</h2>
        <p>Enter your credentials to continue</p>
        <form onSubmit={SubmitHandler} className="login-form">
          <label className="login-field">
            <FaEnvelope />
            <input
              value={Email}
              onChange={(e) => SetEmail(e.target.value)}
              required
              type="text"
              placeholder="Email ID"
              aria-label="Email ID"
            />
          </label>
          <label className="login-field">
            <FaLock />
            <input
              value={Pass}
              onChange={(e) => SetPassword(e.target.value)}
              required
              type="password"
              placeholder="Password"
              aria-label="Password"
            />
          </label>
          <button type="submit" className="login-submit">
            Log In <FaArrowRight />
          </button>
        </form>
      </section>
    </main>
  )
}

export default Login
