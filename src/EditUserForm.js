import React, { useState, useEffect } from 'react'

const EditUserForm = props => {
  const [ user, setUser ] = useState(props.currentUser)

  useEffect(
    () => {
      setUser(props.currentUser)
    },
    [ props ]
  )
  // You can tell React to skip applying an effect if certain values haven’t changed between re-renders. [ props ]

  const handleInputChange = event => {
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
  }

  return (
    <form
      onSubmit={event => {
        event.preventDefault()

        props.updateUser(user.id, user)
      }}
    >
      <label>Name</label>
      <input type="text" name="name" value={user.name} onChange={handleInputChange} />&nbsp;&nbsp;
      <label>Username</label>
      <input type="text" name="username" value={user.username} onChange={handleInputChange} />&nbsp;&nbsp;
      <label>Age</label>
      <input type="text" name="age" value={user.age} onChange={handleInputChange} />&nbsp;&nbsp;
      <label>Location</label>
      <input type="text" name="location" value={user.location} onChange={handleInputChange} />&nbsp;&nbsp;
      <br/><br/>
      <button class="btn btn-success">Update user</button>&nbsp;&nbsp;
      <button onClick={() => props.setEditing(false)} class="btn btn-secondary">
        Cancel
      </button>
      <hr/>
    </form>
  )
}

export default EditUserForm