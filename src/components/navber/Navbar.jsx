import React, { useState, useEffect } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import {NavLink} from "react-router-dom"
import styles from './style.module.css'
const CustomNavbar = () => {
  const [toggleNav, setToggleNav] = useState(false);

  const handleNavToggle = () => {
    setToggleNav(!toggleNav);
  };

  useEffect(() => {
    const handleWindowResize = () => {
      setToggleNav(window.innerWidth <= 750);
    };

    window.addEventListener('resize', handleWindowResize);
    handleWindowResize();

    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return (
    <Navbar collapseOnSelect expand="lg" bg="primary"   variant="dark" className="px-4">
      <Navbar.Brand href="/"   >SALES APP</Navbar.Brand>
      <Navbar.Toggle onClick={handleNavToggle} aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" className={`${toggleNav ? `${styles.show}` : `${styles.show}`}`}>
        <Nav className="mr-auto">
          <NavLink to="/"  >ADD SALES</NavLink>
          <NavLink to="/topSales">TOP 5 SALES</NavLink>
          <NavLink to="/revenue"  >TODAY'S TOTAL REVENUE</NavLink>
          <NavLink to="/login"  >LOGIN</NavLink>
          <NavLink to="/ragister"   >RAGISTER</NavLink>
          <NavLink to="#">LOGOUT</NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;


