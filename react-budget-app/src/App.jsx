import React, {useEffect, useState} from 'react';
import {Routes, Route, Link} from 'react-router-dom'
import UserList from "./Routes/UserList";
import Deposit from "./Routes/Deposit";
import Withdraw from "./Routes/Withdraw";
import Transfer from "./Routes/Transfer";
import Balance from "./Routes/Balance";
import './Styles/App.css';

function App() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/budget-app")
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])


    return (
        <div>
            {/*<UserList users={users}/>*/}

            <nav>
                <ul>
                    <li><Link to="/Deposit">Deposit</Link></li>
                    <li><Link to="/Withdraw">Withdraw</Link></li>
                    <li><Link to="/Transfer">Transfer</Link></li>
                    <li><Link to="/Balance">Balance</Link></li>
                </ul>
            </nav>
            <Routes>
                <Route path="/deposit" element={<Deposit/>}/>
                <Route path="/withdraw" element={<Withdraw/>}/>
                <Route path="/transfer" element={<Transfer/>}/>
                <Route path="/balance" element={<Balance/>}/>
            </Routes>

        </div>
    );
}

export default App;
