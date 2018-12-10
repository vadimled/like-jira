import React, {Component} from "react";
import './style.scss';
import {connect} from "react-redux";
import Ticket from '../Ticket'

class TicketsBucket extends Component {
  
  
  getTickets = () => {
    let res = [];
    const {tks, ticketsIds} = this.props;
    
    for (let ticket in tks) {
      if (ticketsIds.includes(ticket)) {
        res.push(<Ticket
          key={ticket}
          id={ticket}
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
