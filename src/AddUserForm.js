import React, { useState } from 'react'

const AddUserForm = props => {
	const initialFormState = { id: null, name: '', username: '',age:null,location:'' }
	const [ user, setUser ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setUser({ ...user, [name]: value }) 
	}

	return (
		<form
			onSubmit={event => {
				event.preventDefault()
				if (!user.name || !user.username ||!user.age || !user.location){
					return alert("notempty")}

				props.addUser(user)
				setUser(initialFormState)
			}}
		>
			<label>Name</label>&nbsp;&nbsp;
			<input type="text" name="name" value={user.name} onChange={handleInputChange} />&nbsp;&nbsp;
			<label>Username</label>&nbsp;&nbsp;
			<input type="text" name="username" value={user.username} onChange={handleInputChange} />&nbsp;&nbsp;
			<label>Age</label>&nbsp;&nbsp;
			<input type="number" name="age" value={user.age} onChange={handleInputChange} />&nbsp;&nbsp;
			<label>Location</label>&nbsp;&nbsp;
			<input type="text" name="location" value={user.location} onChange={handleInputChange} />&nbsp;&nbsp;
			<br/><br/>
			<button class="btn btn-success">Add new user</button>
		</form>
	)
}

export default AddUserForm