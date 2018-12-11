import React, {Fragment} from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink, Button, InputGroup, InputGroupAddon, Input
} from 'reactstrap';
import Portal from '../Portal';
import NewIssue from "../NewIssue";
import './style.scss';
import {connect} from "react-redux";
import * as actions from "../../store/actions/dbActions";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      isPortal: false,
      search: ""
    };
  }
  
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
  
  clickHandler = () => {
    this.setState({isPortal: true})
  };
  
  onCancelHandler = () => {
    this.setState({isPortal: false})
  };
  
  onChangeHandler = (e) => {
    this.setState({search: e.target.value})
  };
  
  onFindHandler = () => {
    this.props.onFind(this.state.search);
  };
  
  
  render() {
    return (
      <Fragment>
        <Navbar light expand="md" className="navbaradd">
          <NavbarBrand href="/"><h1>Like-Jira</h1></NavbarBrand>
          <NavbarToggler onClick={this.toggle}/>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink color="link" href="https://github.com/vadimled/like-jira">GitHub</NavLink>
              </NavItem>
              <NavItem className="ml-3">
                <Button color="success" onClick={this.clickHandler}>Create</Button>
              </NavItem>
              <NavItem className="ml-3">
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    <Button onClick={this.onFindHandler}>Find</Button>
                  </InputGroupAddon>
                  <Input placeholder="Search..." onChange={this.onChangeHandler}/>
                </InputGroup>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        {
          this.state.isPortal &&
          <Portal>
            <NewIssue onCancel={this.onCancelHandler}/>
          </Portal>
        }
      </Fragment>
    );
  }
}
 const mapDispatchToProps = dispatch => {
    return {
      onFind: (str) => dispatch(actions.onFindTickets(str))
    }
  };
  
export default connect(null, mapDispatchToProps)(Header)
