import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem, Button, InputGroup, InputGroupAddon, Input
} from 'reactstrap';
import './style.scss';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }
  
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
  
  clickHandler = () => {
  
  };
  
  render() {
    return (
      <div>
        <Navbar light expand="md" className="navbaradd">
          <NavbarBrand href="/"><h1>Like-Jira</h1></NavbarBrand>
          <NavbarToggler onClick={this.toggle}/>
          <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-5" navbar>
                <NavItem>
                  <NavLink color="light" href="https://github.com/vadimled/like-jira">GitHub</NavLink>
                </NavItem>
                <NavItem className="ml-5">
                  <Button color="success" onClick={this.clickHandler}>Create</Button>
                </NavItem>
                <NavItem className="ml-5">
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">?</InputGroupAddon>
                    <Input placeholder="Search..." />
                  </InputGroup>
                </NavItem>
              </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
  
}
