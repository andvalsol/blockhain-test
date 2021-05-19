const SHA256 = require('crypto-js/sha256')
const { Block } = require("./block")

class Blockchain {
    constructor() {
        this.chain = []

        // Create a Genesis block
        this.addBlock(new Block("Genesis block"))
    }

    addBlock(newBlock) {
        newBlock.height = this.chain.length
        newBlock.time = new Date().getTime().toString().slice(0,-3) // Make this timestamp comparable

        // We need to check if there were any previous data
        if (this.chain.length > 0) {
            // We need a reference to a new block object and reference the previous block hash
            newBlock.previousblockhash = this.chain[this.chain.length - 1].hash
        }

        console.log("New block: ", newBlock)

        newBlock.hash = SHA256(JSON.stringify(newBlock)).toString()
        this.chain.push(newBlock)
    }
}

module.exports.Blockchain = Blockchain