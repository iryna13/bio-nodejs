var number,
    origin,
    destination;
module.exports = (info) => {
    var values = {
        number: null,
        origin: null,
        destination: null,
        departs: null,
        arrives: null
    }
    for (var prop in values) {
        if (values[prop] !== 'undefined') {
            values[prop] = info[prop];
        }
    }

    var functions = {
        getInfo: () => values
    }

    return functions;
}