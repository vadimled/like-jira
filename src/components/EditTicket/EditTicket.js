import React, {Component, Fragment} from 'react';
import {Input, Form, FormGroup, Label, Col, Button, Badge} from 'reactstrap';
import './style.scss';
import * as actions from "../../store/actions/dbActions";
import {connect} from "react-redux";

class EditTicket extends Component {
  constructor(props) {
    super(props);
    this.ticket = this.getTicket();
    this.state = {
        status: null,
        severity: null,
        summary: null,
        description: null,
        created: null,
        updated: null
    }
  }
  
  getTicket = () => {
    const {dbTickets, id} = this.props;
    for (let i in dbTickets) {
      if (i === id) {
        return dbTickets[i]
      }
    }
    return undefined;
  };
  
  onChangeModel = e => {
    e.target.value !== "" && this.setState({[e.target.name]: e.target.value});
  };
  
  submitForm = (e) => {
    e.preventDefault();
    const {onCancel, id} = this.props;
    const data = new Date().toISOString();
    const sM = this.state;
    
    const model = {
      status: !sM.status ? this.ticket.status : sM.status,
      severity: !sM.severity ? this.ticket.severity :sM.severity,
      summary: !sM.summary ? this.ticket.summary : sM.summary,
      description: !sM.description ? this.ticket.description : sM.description,
      updated: data,
      created: this.ticket.created
    };
    this.props.editTicket({edited: model, id});
    onCancel()
  };
  
  render() {
    const {onCancel, id} = this.props;
    return (
      <Fragment>
        <div className="form-wrapper">
          <div className="edit-header">Edit Ticket<Badge className="ml-4" color="secondary">ID{id}</Badge>
          </div>
          
          <Form onSubmit={this.submitForm}>
            <p>Created <Badge color="secondary">{this.ticket.created}</Badge></p>
            <p>Updated <Badge color="secondary"  className="mb-2">{this.ticket.updated}</Badge></p>
            <FormGroup row>
              <Label for="summary" sm={2}>Summary</Label>
              <Col sm={10}>
                <Input className="ml-2" type="text" name="summary" id="summary"
                       value={this.state.summary || this.ticket.summary}
                       onChange={this.onChangeModel}
                       placeholder="Summary..."/>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="description" sm={2}>Description</Label>
              <Col sm={10}>
                <Input className="ml-2" type="textarea" name="description" id="description"
                       value={this.state.description || this.ticket.description}
                       onChange={this.onChangeModel}
                       placeholder="Description ..."/>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="severity" sm={2}>Severity</Label>
              <Col sm={10}>
                <Input className="ml-2" type="select" name="severity" id="severity"
                       onChange={this.onChangeModel}
                       value={this.state.severity || this.ticket.severity}>
                  <option value="high">High</option>
                  <option value="medium">Medium</option>
                  <option value="low">Low</option>
                </Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="status" sm={2}>Status</Label>
              <Col sm={10}>
                <Input className="ml-2" type="select" name="status" id="status"
                       onChange={this.onChangeModel}
                       value={this.state.status || this.ticket.status}>
                  <option value="open">Open</option>
                  <option value="progress">In-Progress</option>
                  <option value="done">Done</option>
                </Input>
              </Col>
            </FormGroup>
            <Button className="mr-2 mt-2" type="submit" color="primary">Save</Button>
            <Button className="mr-2 mt-2" onClick={onCancel}>Cancel</Button>
          </Form>
        </div>
      </Fragment>
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

export default connect(mapStateToProps, mapDispatchToProps)(EditTicket);
