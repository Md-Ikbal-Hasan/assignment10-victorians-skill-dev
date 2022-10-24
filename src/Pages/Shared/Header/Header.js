import React from 'react';
import './Header.css'
import { FaUserAlt } from 'react-icons/fa';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';

import myLogo from '../../../assets/images/myLogo.png'

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">


            <Navbar.Brand className='ms-md-5'>
                <img
                    alt=""
                    src={myLogo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top navbar-logo"
                />{' '}
                <span className='fw-bold'>Victoriasn-Skill-Dev</span>
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className='me-5'>
                <Nav className="ms-auto">
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/courses'>Courses</NavLink>
                    <NavLink to='/blog'>Blog</NavLink>
                    <NavLink to='/faq'>FAQ</NavLink>
                    <NavLink to='/register'>Register</NavLink>
                    <NavLink to='/login'>Login</NavLink>
                    <span className='btn btn-success btn-sm me-3 logout-btn '>Logout</span>


                    <NavLink to='/profile'>
                        <FaUserAlt />
                    </NavLink>
                </Nav>
            </Navbar.Collapse>

        </Navbar>
    );
};

export default Header;