import React from "react";
import {Link} from 'react-router-dom';
import {FaHome, FaLock, FaRegistered, FaSign} from 'react-icons/fa';

function Navbar(){
    return(<div className="nav">
        <Link className="link" to="/">Home</Link>
        <Link className="link" to="/login">Login</Link>
        <Link className="link" to="/signUp">SignUp</Link>
        <Link className="link" to="/about">About</Link>
    </div>)
}

export default Navbar