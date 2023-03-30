import React from 'react';
import User from './User';

const UserList = ({users}) => {
    return (
        <div className="user-list">
            {users.map(user => (
                <User
                    key={user.id}
                    age={user.age}
                    name={user.name}
                    gender={user.gender}
                    email={user.email}
                    balance={user.balance}/>
            ))}
        </div>
    );
}

export default UserList;