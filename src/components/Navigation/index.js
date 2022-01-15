import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
    return (
        <nav>
            <ul className='row justify-content-center'>
                <li className='col-md-2 col-sm-6 mb-2'>
                    <NavLink 
                        activeClassName = "active"
                        isActive={() => window.location.pathname === "/about"}
                        to = "/about"
                    >
                    About
                    </NavLink>
                </li>
                <li className='col-md-2 col-sm-6 mb-2'>
                    <NavLink
                        activeClassName = "active"
                        isActive ={() => window.location.pathname === "/projects"}
                        to = "/projects"
                    >
                    Projects
                    </NavLink>
                </li>
                <li className='col-md-2 col-sm-6 mb-2'>
                    <NavLink
                        activeClassName = "active"
                        isActive ={() => window.location.pathname === "/contact"}
                        to = "/contact"
                    >
                    Contact
                    </NavLink>
                </li>
                <li className='col-md-2 col-sm-6 mb-2'>
                    <NavLink
                        activeClassName = "active"
                        isActive ={() => window.location.pathname === "/resume"}
                        to = "/resume"
                    >
                    Resume
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;