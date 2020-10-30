import { connect } from "react-redux";
import React from "react";
import { Navbar, Nav, Form, Button, NavDropdown} from "react-bootstrap"

class Pins extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <>
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">Trivia</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="https://github.com/Anthony-E-Cruz">Github</Nav.Link>
                <Nav.Link href="https://www.linkedin.com/in/anthonyecruz/">LinkedIn</Nav.Link>
                <Nav.Link href="https://angel.co/u/anthony-cruz-13">Angel List</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </>
      </div>
    )
  }
}

const msp = (state) => {
  return {
    
  };
};

const mdp = (dispatch) => ({
  
});

export default connect(msp, mdp)(Pins);