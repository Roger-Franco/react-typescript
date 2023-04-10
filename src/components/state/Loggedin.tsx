import React, { useState } from 'react'

export const Loggedin = () => {
  const [isLoggedin, setIsLoggedin] = useState(false)
  const handleLogin = () => {
    setIsLoggedin(true)
  }
  const handleLogout = () => {
    setIsLoggedin(false)
  }
  return (
    <div>
      <button onClick={handleLogin}></button>
      <button onClick={handleLogout}></button>
      <div>User is {isLoggedin ? 'logged in' : 'logged out'}</div>
    </div>
  )
}
