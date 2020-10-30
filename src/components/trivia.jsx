import { connect } from "react-redux";
import React from "react";
import { Navbar, Nav, Form, Button} from "react-bootstrap"

class Pins extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <>
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
            <Form inline>
              <Button variant="outline-info">Search</Button>
            </Form>
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