import React, {Component, Fragment} from 'react';
import './App.scss';
import {Col, Row} from 'reactstrap';
import TicketsBucket from './TicketsBucket';
import {connect} from "react-redux";
import * as actions from "../store/actions/dbActions";
import Spinner from "./Spinner";
import Header from "./Header";

class App extends Component {
  constructor(props) {
    super(props);
    this.props.fetchDb();
  }
  
  render() {
    return (
      <Fragment>
        <div className="container">
          <Header/>
          {
            this.props.isLoading ?
              <Spinner/>
              :
              <Row>
                <Col><TicketsBucket id="open" title="Open"/></Col>
                <Col><TicketsBucket id="progress" title="In-Progress"/></Col>
                <Col><TicketsBucket id="done" title="Done"/></Col>
              </Row>
            
          }
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoading: state.db.loading
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchDb: () => dispatch(actions.fetchDB())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

