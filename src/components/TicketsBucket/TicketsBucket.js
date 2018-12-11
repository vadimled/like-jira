import React, {Component, Fragment} from "react";
import './style.scss';
import {connect} from "react-redux";
import Ticket from '../Ticket'
import Portal from "../Portal";
import EditTicket from "../EditTicket";

class TicketsBucket extends Component {
  state = {
    isPortal: false,
    openedId: ""
  };
  
  onCancelHandler = () => {
    this.setState({isPortal: false})
  };
  
  onClickTicket = (e, id) => {
    this.setState({isPortal: true, openedId: id})
  };
  
  getTickets = () => {
    let res = [];
    const {tks, ticketsIds} = this.props;
    
    for (let ticket in tks) {
      if (ticketsIds.includes(ticket)) {
        res.push(<Ticket
          key={ticket}
          id={ticket}
          onClickHandler={this.onClickTicket}
          summary={tks[ticket].summary}
          description={tks[ticket].description}/>)
      }
    }
    return res;
  };
  
  render() {
    const {title} = this.props;
    const tickets = this.getTickets();
    return (
      <Fragment>
        <div className="wrapper">
          <div className="bucket">
            <h5 className="title">
              {title}
            </h5>
            <div className="tickets-container">
              {tickets}
            </div>
          </div>
        </div>
        {
          this.state.isPortal &&
          <Portal>
            <EditTicket id={this.state.openedId} onCancel={this.onCancelHandler}/>
          </Portal>
        }
      </Fragment>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    tks: state.db.tickets,
    ticketsIds: state.db.buckets[ownProps.id]
  }
};

export default connect(mapStateToProps)(TicketsBucket);
