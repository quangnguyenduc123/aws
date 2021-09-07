var Server = /** @class */ (function () {
    function Server(port, address) {
        this.port = port;
        this.address = address;
    }
    Server.prototype.startServer = function () {
        console.log("Starting server at: " + this.address + ":" + this.port);
    };
    return Server;
}());
var serverA = new Server(8080, 'localhost');
serverA.startServer();
