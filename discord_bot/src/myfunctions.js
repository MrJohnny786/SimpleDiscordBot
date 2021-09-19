const PREFIX = '$'

class myFunctions {
    constructor(client) {
        this.client = client;
        console.log(this.client)
    }

}

module.exports = { myFunctions: myFunctions }