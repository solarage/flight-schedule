export const checkPath = (path) => {
    const arrivalUrl = 'https://5bbe13d38be32700139e352f.mockapi.io/api/v1/arrival';
    const departureUrl = 'https://5bbe13d38be32700139e352f.mockapi.io/api/v1/departure';

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

