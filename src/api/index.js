export const checkPath = (path) => {
    const arrivalUrl = 'http://www.mocky.io/v2/5b85bbd73000004c2a72943e';
    const departureUrl = 'http://www.mocky.io/v2/5b85bc65300000ac2972943f';

    if (path === "arrival") {
        return arrivalUrl;
    }
    else if (path === "departure") {
        return departureUrl;
    }
    else {
        console.error('Wrong path');
        return path;
    }
}

export const fetchFlightsData = (url) => {

    let status = function(response) {
        if(response.status !== 200) {
            return Promise.reject(new Error(response.statusText))
        }
        console.log('response', response);
        return Promise.resolve(response);
    }

    let json = function(response) {
        return response.json()
    }

    fetch(url)
        .then(status)
        .then(json)
        .then(function(data) {
            console.log('data', data);
            return data;
        })
        .catch(function(error) {
            console.log('error', error);
        })
}

