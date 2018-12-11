function getSelectedIDs(filteredTickets) {
  let ticketsIDs = {
    open: [],
    progress: [],
    done: []
  };
  for (let id in filteredTickets) {
    if (filteredTickets.hasOwnProperty(id)) {
      switch (filteredTickets[id].status) {
        case "open":
          ticketsIDs.open.push(id);
          break;
        case "progress":
          ticketsIDs.progress.push(id);
          break;
        case "done" :
          ticketsIDs.done.push(id);
          break;
        default:
          break;
      }
    }
  }
  return ticketsIDs;
}

export function getBucketsContent(tickets, filter = null) {
  let ticketsIDs = {
    open: [],
    progress: [],
    done: []
  };
  
  if (!tickets) return ticketsIDs;
  
  const filteredTickets = {};
  
  if (filter && filter.length > 0) {
    for (let ticket in  tickets) {
      if (tickets.hasOwnProperty(ticket)) {
        if (tickets[ticket].description.indexOf(filter) !== -1 ||
          tickets[ticket].summary.indexOf(filter) !== -1) {
          filteredTickets[ticket] = tickets[ticket];
        }
      }
    }
  }
  ticketsIDs = (Object.keys(filteredTickets).length !== 0) ? getSelectedIDs(filteredTickets) : getSelectedIDs(tickets);
  
  return ticketsIDs;
}

