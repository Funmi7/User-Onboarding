import React from 'react';


const Users =props => {
    const {usersList} = props;
        return (
           usersList.map((user) => (
            <div key={user.id}>
                {user.name}
                {user.email}
                {user.password}
                {user.checkbox}
            </div> 
            ))
        )
}

export default Users;