import React from 'react';

const User = (props) => {
    const {id, age, name, gender, email, balance} = props;
    return (
        <div>
            {/*<h3>User</h3>*/}
            <p>ID: {id}</p>
            <p>Age: {age}</p>
            <p>Name: {name}</p>
            <p>Gender: {gender}</p>
            <p>Email: {email}</p>
            <p>Balance: {balance}</p>
        </div>
    );
}

export default User;