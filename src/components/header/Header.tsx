import "./App.css";
import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { routes } from "./Static";

const Header = () => {
  return (
    <Navbar expand="lg" variant="dark" className="MainHeader">
      <Navbar.Brand
        style={{
          flex: 1,
          paddingLeft: "30px",
          display: "flex",
          alignItems: "flex-start",
        }}
        className="brandHolder"
        href="/spacelibrary/"
      >
        <h2>Space Library</h2>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="hamburger" />
      <Navbar.Collapse id="basic-navbar-nav" className="hamburger">
        <Nav
          className="mr-auto"
          style={{
            paddingRight: "30px",
            paddingLeft: "30px",
            flex: 1,
            display: "flex",
            justifyContent: "flex-end",
            width: "20%",
          }}
        >
          {routes.map((route) => (
            <Nav.Link className="headerLinks" href={route.link}>
              <h3>{route.text}</h3>
            </Nav.Link>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
