import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
  return (
    <header className="px-3">
      <Navbar className="border rounded-pill mt-3">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand className="pe-auto">Amazoon</Navbar.Brand>
          </LinkContainer>

          <Nav>
            <Nav.Item>
              <LinkContainer to="/cart">
                <Nav.Link>
                  <FontAwesomeIcon icon={faShoppingCart} />
                </Nav.Link>
              </LinkContainer>
            </Nav.Item>
            <Nav.Item>
              <LinkContainer to="/account">
                <Nav.Link>
                  <FontAwesomeIcon icon={faUser} />
                </Nav.Link>
              </LinkContainer>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
