import React from 'react';
import { Link } from 'react-router-dom';

const Loader = () => <div>Loading...</div>;

const Nav = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </div>
    )
}

export { Loader, Nav };
