class Server{
    port: number;
    address: string;

    constructor(port: number, address: string){
        this.port = port
        this.address = address
    }

    startServer() {
        console.log(`Starting server at: ${this.address}:${this.port}`)
    }
}

const serverA = new Server(8080, 'localhost')
serverA.startServer()