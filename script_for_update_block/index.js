const {
    ethers,
    Wallet
} = require("ethers");

let toAddress = '0x9b5469685E66502C88C86F4b3161108C1e102B34';
let newPrivateKey;
const valueToSend = 1; // 1 Ether
// Connect to the Ethereum network using Infura
let url = "http://127.0.0.1:8547";
const provider = new ethers.getDefaultProvider(url);
// Transfer funds from one account to another
async function transferFunds() {
    try {
        let walletMnemonic = Wallet.fromMnemonic('indoor dish desk flag debris potato excuse depart ticket judge file exit', "m/44'/60'/0'/0/" + 0);
        const wallet = new ethers.Wallet(walletMnemonic.privateKey, provider);
        const tx = {
            to: toAddress,
            value: valueToSend,
        };

        const txResponse = await wallet.sendTransaction(tx);
        console.log('Transaction sent. Transaction hash:', txResponse.hash);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

async function main() {
    await setInterval(transferFunds, 2000);
}
// Call the main function to execute the script
main();