require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz enter boil food stone recipe random unfair hard light army gesture'; 
let testAccounts = [
"0x4c7fa1d37d7f88fed744be43351f38caf82d2fdd3932af618be30bb7db89ab63",
"0x3dde47512c4f02141f87e84204539a0a900e31ee8563aad2ee27c561bdf22f54",
"0xe4afdf26af2d6807d0224c65438633c941f89dc8c144edc7bf18b889b3c50ad5",
"0xba0a58ea548cad048541f36ac4782181dc0b13443dae45c69546d62f33d7c2bc",
"0x1c3c38e140dc933df98406f179a14aa2df7659aff23983db4fa2100708e15d78",
"0xfb4bff5b61e501a133922b8169f0e20ec4fba740f802464acd7c5c9d30710385",
"0xbcb7755832fcbea1f54955cc13c2c8ff3f8286ef48de0ea5e9cd56e724eb9e00",
"0x87869f262ec7af7d213c3c44ef83fe6fd448e61a399ea0d13c07c305d793825e",
"0x9f43c87063d2df849ef488082616f8bb53f42aa445ad699bab61638669d3cdbd",
"0xd8b0ef3d5b83e39766fd948a01f8ef0c8cc3be5c5089fccc6dce9905372951c0"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


