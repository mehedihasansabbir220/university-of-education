import React from 'react';
import './Header.css'
import logo from '../../image/logo.jpg';
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
    const NavUnlisted = styled.ul`
  text-decoration: none;
  
`;
    const linkStyle = {
        margin: "1rem",
        textDecoration: "none",
        color: " red",
        fontSize: "1.3rem",
        position: "relative",
    };

    return (
        <div className="Header-container">
            <div className="logo-container">
                <img src={logo} alt="" srcSet="" />
                <h3><span className="text-warning">University</span>
                    <br />
                    Of Education
                </h3>
            </div>
            <div className='navlink'>
                <NavUnlisted>
                    <Link to="/home" style={linkStyle}>
                        Home
                    </Link>
                    <Link to="/about" style={linkStyle}>
                        About
                    </Link>
                    <Link to="/course" style={linkStyle}>
                        Course
                    </Link>
                    <Link to="/teacher" style={linkStyle}>
                        Teacher
                    </Link>
                </NavUnlisted>

            </div>

        </div>
    );
};

export default Header;