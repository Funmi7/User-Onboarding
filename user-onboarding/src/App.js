import React, {useState, useEffect} from 'react';
import './App.css';
import UserForm from './Form';
import axios from 'axios';
import {Formik} from 'formik';
import Users from './UsersList';


const usersAPI = 'https://reqres.in/api/users';

const initialUserForm = {
  name: "",
  email: "",
  password: "",
  checkbox: false
};


function App() {
  const [usersList, setUsersList] = useState([]);
  const [serverError, setServerError] = useState('');
  const [user, setUser] = useState(initialUserForm);

  const addUser = (formValues, actions) => {
    const userToPost = {
      name: formValues.name,
      email: formValues.email,
      password: formValues.password,
      checkbox: formValues.checkbox
    };
    setUser(userToPost);

    axios.post(usersAPI, userToPost)
    .then(res => {
      console.log(usersAPI);
      const createdUser = res.data;
      console.log(createdUser);
      setUsersList(usersList.concat(createdUser));
      actions.resetForm();
    })
    .catch(error => {
      setServerError(error.message)
    });
  }

  return (
    <div className="App">
      <UserForm 
      initialUserForm={initialUserForm}
      onSubmit={addUser}
      />
      <Users usersList={usersList} />
    </div>
  );
}

export default App;
