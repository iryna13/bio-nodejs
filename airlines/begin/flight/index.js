var Flight = function() {
    this.data = {
        number: null,
        origin: null,
        destination: null,
        departs: null,
        arrives: null
    };

    this.fill = (info) => {
        for (var prop in this.data) {
            if (this.data[prop] !== 'undefined') {
                this.data[prop] = info[prop];
            }
        }
    };

    this.getInfo = () => this.data;
};
//Factory patern
module.exports = (info) => {
    var instance = new Flight();
    instance.fill(info);
    return instance;
}