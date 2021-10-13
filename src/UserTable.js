import React from 'react'

const UserTable = props => (
  <table class="table table-hover table-dark">
    <thead>
      <tr class="bg-info">
        <th>Name</th>
        <th>Username</th>
        <th>Actions</th>
        <th>Age</th>
        <th>Location</th>
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map(user => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.age}</td>
            <td>{user.location}</td>
            <td>
              <button
                onClick={() => {
                  props.editRow(user)
                }}
                class="btn btn-primary"

              >
                Edit
              </button>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <button
                onClick={() => props.deleteUser(user.id)}
                class="btn btn-danger"

              >
                
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No users</td>
        </tr>
      )}
    </tbody>
  </table>
)

export default UserTable