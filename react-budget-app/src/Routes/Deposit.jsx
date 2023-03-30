import React from 'react';
import {useParams} from 'react-router-dom';
import PropTypes from 'prop-types';

Deposit.propTypes = {};

function Deposit(props) {
    const {deposit} = useParams();
    const {balance, setBalance} = props;



    return (
        <div>
            <h3>Deposit</h3>
            <input
                className="userID"
                type="number"

            />
            <input
                className="deposit"
                type="number"
                value={deposit}
            />

        </div>
    );
}

export default Deposit;