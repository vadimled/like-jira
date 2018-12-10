export function getBucketsContent(tickets) {
  let res = {
    open: [],
    progress: [],
    done: []
  };
  
  if (!tickets) return res;
  
  for (let ticket in  tickets) {
     switch (tickets[ticket].status) {
      case "open":
        res.open.push(ticket);
        break;
      case "progress":
        res.progress.push(ticket);
        break;
      case "done" :
        res.done.push(ticket);
        break;
    }
  }
  return res;
}

/*export function getCountriesList(data) {
    const arr = [];

    if(!data) {
        return arr;
    }

    for (let item in data) {

        if (arr.length === 0) {
            arr.push([item, data[item].country_name])
        }
        else {
            const isRepeat = arr.some(val => data[item].country_name === val[1]);
            !isRepeat && arr.push([item, data[item].country_name])
        }

    }
    return arr;
}

export function getCitiesList(data) {
    return data && Object.keys(data).map(val => [val, data[val].city]);
}

export function getCitiesListByCountry(data, country) {
    return data && Object.keys(data).filter(val =>
        data[val].country_name === country && [val, data[val].city]).map(val => [val, data[val].city]);
}

export function getLocation(data, id) {
    const arr = Object.keys(data).filter(val => val === id && data[val]);
    let i = arr[0];
    return {...data[arr], ...{id: i}};
}
export function getArray(data, param) {
    let arr = [];

    if (param != null) {
        arr = getCitiesListByCountry(data, param);
    }
    else {
        arr = getCitiesList(data);
    }
    return arr;
}
*/


