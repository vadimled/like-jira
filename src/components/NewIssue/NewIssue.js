import React, {Component, Fragment} from 'react';
import { Input, Form, FormGroup, Label, Col, Button } from 'reactstrap';
import './style.scss';
import * as actions from "../../store/actions/dbActions";
import {connect} from "react-redux";

class NewIssue extends Component {
  
  submitForm = (e) => {
    e.preventDefault();
    const obj = {};
    const {onCancel} = this.props;
  
    for (let input in e.target) {
      if (e.target[input]) {
        switch (e.target[input].name) {
          case 'summary':
            obj['summary'] = e.target[input].value;
            break;
          case 'description':
            obj['description'] = e.target[input].value;
            break;
          case 'severity':
            obj['severity'] = e.target[input].value;
            break;
        }
      }
    }
    obj['status'] = "open";
    obj['updated'] = "";
    obj['created'] = new Date();
    this.props.addEntry(obj);
    onCancel()
  };
  
   render() {
    const {onCancel} = this.props;
    return (
      <Fragment>
         <div className="form-wrapper">
          <div className="newissue-header">New Issue</div>
          <Form onSubmit={this.submitForm}>
            <FormGroup row>
              <Label for="summary" sm={2}>Summary</Label>
              <Col sm={10}>
                <Input className="ml-2" type="text" name="summary" id="summary" placeholder="Summary..."/>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="description" sm={2}>Description</Label>
              <Col sm={10}>
                <Input className="ml-2" type="textarea" name="description" id="description"
                       placeholder="Description ..."/>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="severity" sm={2}>Severity</Label>
              <Col sm={10}>
                <Input className="ml-2" type="select" name="severity" id="severity">
                  <option>High</option>
                  <option>Medium</option>
                  <option>Low</option>
                </Input>
              </Col>
            </FormGroup>
            <Button className="mr-2" type="submit" color="primary">Save</Button>
            <Button onClick={onCancel} >Cancel</Button>
          </Form>
        </div>
      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addEntry: (data) => dispatch(actions.addDBEntry(data))
  }
};

export default connect(null ,mapDispatchToProps)(NewIssue);
