import React, { useState } from 'react'
import './App.css'
// import {React} from 'react'
import userContext from './userContext'
import Dashboard from './dashboard'


function App() {
  const userData = {
    name: 'Mohit Sengar',
    isLoggedIn: true
  };

  return (
    <userContext.Provider value={userData}>
      <div className="App">
        <h1>Welcome to the User Context App</h1>
        <Dashboard />
      </div>
    </userContext.Provider>
  )
}

export default App
