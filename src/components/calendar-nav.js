import React from 'react';
import { Link } from 'react-router-dom';

export default () =>{
    return(
        <nav className="calendar-nav">
            <div className="calendar-buttons">
                <div>
                    <Link to="/signup">Sign Up</Link>
                </div>
                <div>
                    <a href="#">Login</a>
                </div>
            </div>
        </nav>
    )
}
