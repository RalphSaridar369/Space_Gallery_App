import "../../App.css";
import { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { routes } from "./Static";

class Header extends Component {
  render() {
    return (
      <Navbar expand="lg" variant="dark" className="main-header">
        <Navbar.Brand
          style={{
            flex: 1,
            paddingLeft: "30px",
            display: "flex",
            alignItems: "flex-start",
          }}
          className="brand-holder"
          href="/"
        >
          <h2>Space Library</h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
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
            {routes.map((route, index) => (
              <Nav.Link className="header-links" href={route.link} key={index}>
                <h3>{route.text}</h3>
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
    /*
     */
  }
}

export default Header;
