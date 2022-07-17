require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid enter off food make raise mad method coral light army general'; 
let testAccounts = [
"0xb95bbb72d7afe3d01e71dd8af1ad037cda1f6feab52540ef46586cd5c2e7ea19",
"0xeb432b5d5d09a90d35e6bc5e137fe34e26f42858cd62a652f2f55afa7c33167e",
"0x91df5d9764d5e813830ff65ad3aeef41aa36df43a6b3773d37dc1cb1f87a9974",
"0x1f4b0d51fe0ea2fbf08d324fdffec2b8808034130e73693af5a2b278cd39b0e5",
"0xf279f68d3c4153bb01e8835342e9b781eab713ce52c5d879620c0ec3c298658c",
"0x3e1a91f51512d8f731068c7a5d5520faa62a8ac144b23599f4c5f718ec78587d",
"0x8337f6e4568f814fca8dfd55162e368c46c1d0bfcb33a6efd21f71db5bae681c",
"0x3069ff8298c0cb3d957f186381ab643be0df6fad31cffda06c01aa95ad43cf55",
"0x40f428c12cde7febe83f3bc9d863af5b969e77e0493946f17d6ac69b4ec3e31f",
"0xde8d7899cb90025260dd1445f66f83f41bd82b102d55adabbb7290ac5dbd5db5"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

