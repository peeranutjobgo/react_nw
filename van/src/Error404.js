import React from 'react';
import './App.css';
import Navbar from './page/Navbar';

const Error404 = () => {
    return (
        <div>
            <Navbar />
            <div className='error404'>
                <h1> 404 NOT FOUND</h1>
                {/* <img src="https://i2.wp.com/learn.onemonth.com/wp-content/uploads/2017/08/1-10.png?fit=845%2C503&ssl=1"></img> */}
            </div>
        </div>
    )
}

export default Error404;