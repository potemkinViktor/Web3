const Web3 = require('web3');
const { expect } = require("chai");
const { ethers, deployments } = require("hardhat");
const hre = require("hardhat");
const { BigNumber, utils } = require("ethers");
const hardhat = require("hardhat");
let fsp = require('fs/promises');

const addressForAprove = ''; // can be the same with addressFrom
const privatekey1 = ''; // addressTo
const infuraUrl = process.env.MORALIS_URL;
const addressFrom = process.env.ADDRESS; // address from which bnb will be deposited
const addressTo = ''; // address to which the deposit will be made
const privateKey = process.env.PRIVATE_KEY // private key of your addressFrom should be like this 

const init1 = async () => {

    const provider = new ethers.providers.JsonRpcProvider(infuraUrl)
    let wallet = new ethers.Wallet(privateKey, provider)

    const networkId = await provider.getNetwork()
    console.log(networkId.chainId);

    const nonce = await provider.getTransactionCount(addressFrom);
    console.log(nonce);

    const ERC20_ABI = [
        "function getCertificate(uint256 _tokenId) returns (string memory)"
    ];

    const contract = new ethers.Contract(
        contract_address,
        ERC20_ABI,
        provider
    )

    const contractWithWallet = contract.connect(wallet)

    const get_Certificate = await contractWithWallet.getCertificate(params)
    await get_Certificate.wait()

    let object = {
                value: get_Certificate
            }
            fsp.writeFile('./data.json', JSON.stringify(object, null, 2));
    console.log(get_Certificate)

}

init1();
