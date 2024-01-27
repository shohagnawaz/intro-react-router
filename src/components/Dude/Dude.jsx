import React from 'react';
import './Dude.css';
import { Link } from 'react-router-dom';

const Dude = ({friend}) => {
    console.log(friend); 
    const {email, name, id, phone, username} = friend;
    return (
        <div className='dude'>
            <h2>{name}</h2>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p>Id: {id}</p>
            <p><Link to={`/friend/${id}`}>Show me details</Link></p>
        </div>
    );
};

export default Dude;