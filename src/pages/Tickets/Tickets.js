import React, {Component} from "react";
import './style.scss';
import {connect} from "react-redux";
import Header from "../../components/Header";
import Spinner from "../../components/Spinner";
import TicketsBucket from "../../components/TicketsBucket";
import * as actions from "../../store/actions/dbActions";
import {Col, Row} from 'reactstrap';

class Tickets extends Component {
  constructor(props) {
    super(props);
    this.props.fetchDb();
    if(this.props.history.action === 'POP'){
      this.props.history.push('/')
    }
  }
  
  render() {
    return (
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
    )
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

export default connect(mapStateToProps, mapDispatchToProps)(Tickets);
