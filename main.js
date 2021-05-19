const {Block} = require("./block");
const {Blockchain} = require("./blockchain");

function main () {
    const blockChain = new Blockchain()
    blockChain.addBlock(new Block("Initial data"))

    console.log(blockChain.chain)
}


main()