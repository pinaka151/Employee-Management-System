import React from 'react'
import { FaSignOutAlt, FaUsers } from 'react-icons/fa'

const Header = (props) => {
  const LogOutUser = () => {
    localStorage.setItem('loggedInUser', '')
    props.changeUser('')
  }

  const name = props.data ? props.data.firstName : props.firstName

  return (
    <header className="dashboard-topbar">
      <div className="dashboard-brand">
        <span className="brand-mark"><FaUsers /></span>
        <span>Employee Management System</span>
      </div>
      <div className="dashboard-user">
        <span>Hello, <strong>{name}</strong></span>
        <button onClick={LogOutUser} className="logout-button">
          <FaSignOutAlt /> Log Out
        </button>
      </div>
    </header>
  )
}

export default Header
