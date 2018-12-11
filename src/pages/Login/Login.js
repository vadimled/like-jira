import React, {Component} from 'react';
import {Button, Form, FormFeedback, FormGroup, Input, Label} from 'reactstrap';
import './style.scss';
import * as actions from "../../store/actions/dbActions";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: {
        "username1@gmail.com": "12345678",
        "username2@gmail.com": "12345678"
      },
      emailInvalid: false,
      passwordInvalid: false
    };
    this.emailInput = React.createRef();
    this.passwordInput = React.createRef();
  }
  
  submitForm = (e) => {
    e.preventDefault();
    const
      email = this.emailInput.current.value,
      password = this.passwordInput.current.value;
    
    for (let item of Object.keys(this.state.users)) {
      if (item ===  email && this.state.users[item] === password) {
        this.props.history.push('/tickets');
      }
    }
 
    this.setState({emailInvalid: true, passwordInvalid: true})
    this.passwordInput.current.value = null;
   };
  
  render() {
    return (
      <div className="login-wrapper">
        <div className="login">
          <div className="login-header">Like Jira</div>
          
          <Form onSubmit={this.submitForm}>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input type="email" name="email" id="email" placeholder="Enter email..."
                     innerRef={this.emailInput} invalid={this.state.emailInvalid}/>
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input type="password" name="password" id="password" placeholder="Enter password..."
                     innerRef={this.passwordInput} invalid={this.state.passwordInvalid}/>
              <FormFeedback className="mb-4">The credentials you supplied were not correct</FormFeedback>
            </FormGroup>
            <Button className="mt-2" type="submit" color="primary">Login</Button>
          </Form>
        </div>
      </div>
    );
  }
  
}

const mapStateToProps = state => {
  return {
    dbTickets: state.db.tickets
  }
};

const mapDispatchToProps = dispatch => {
  return {
    editTicket: (data) => dispatch(actions.editDBItem(data))
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
