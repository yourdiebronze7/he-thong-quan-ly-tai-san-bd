const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
// Replace this with your own mnemonic phrase and Infura/Alchemy endpoint
const mnemonic = 'YOUR_MNEMONIC_HERE'; // IMPORTANT: Replace with your mnemonic
const infuraUrl = process.env.INFURA_URL || 'https://rinkeby.infura.io/v3/YOUR_NEW_INFURA_PROJECT_ID';

module.exports = {
  networks: {
    development: {
      host: '127.0.0.1',
      port: 7545,
      network_id: '*', // Match any network id
    },
    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, infuraUrl),
      network_id: 4,
      gas: 5500000,
    }
  },
  compilers: {
    solc: {
      version: "^0.8.0"
    }
  }
};