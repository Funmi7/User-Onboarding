import React, {useState, useEffect} from 'react';
import './App.css';
import UserForm from './Form';
import axios from 'axios';


const usersAPI = 'https://reqres.in/api/users';

const initialUserForm = {
  name: "",
  email: "",
  password: ""
  // checkbox: ''
};


function App() {
  const [usersList, setUsersList] = useState([]);
  const [serverError, setServerError] = useState('');
  const [user, setUser] = useState(initialUserForm);

  const fetchUsers = () => {
    axios.get(usersAPI)
    .then(res => {
      setUsersList(res.data)
      console.log(res.data);
    })
    .catch(error => {
      setServerError(error.message)
    });
  }

  const addUser = (formValues, actions) => {
    const userToPost = {
      name: formValues.name,
      email: formValues.email,
      password: formValues.password,
      // checkbox: formValues.checkbox
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

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="App">
      <UserForm 
      initialUserForm={initialUserForm}
      onSubmit={addUser}
      />
      {
    usersList.length 
    ? usersList.map(user => (
        <div key={user.id}>
          <h5>Your email is {user.name} and your password is
          {user.email}
          {user.password}</h5>
          {/* {user.checkbox} */}
        </div> 
      ))
       : <div>Add a User!</div>
      }
    </div>
  );
}

export default App;
