export const checkPath = (path) => {
    const arrivalUrl = 'http://www.mocky.io/v2/5b85bbd73000004c2a72943e';
    const departureUrl = 'http://www.mocky.io/v2/5b85bc65300000ac2972943f';

    if (path === "arrival") {
        return arrivalUrl;
    }
    else if (path === "departure") {
        return departureUrl;
    }
    else if (path === "delayed") { //incomplete
        return departureUrl;
    }
    else {
        console.error('Wrong path');
        return path;
    }
}

