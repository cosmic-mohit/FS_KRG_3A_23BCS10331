import React, { useContext } from 'react'
import userContext from './userContext'

function Profile() {    
  const user = useContext(userContext)
  return (
    <div>
      <h2>Profile</h2>
      {user.isLoggedIn ? (
        <p>Welcome, {user.name}!</p>
      ) : (
        <p>Please log in to see your profile.</p>
      )}
    </div>
  )
}

export default Profile