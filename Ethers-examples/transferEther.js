const Web3 = require('web3');
const { expect } = require("chai");
const { ethers, deployments } = require("hardhat");
const hre = require("hardhat");
const { BigNumber, utils } = require("ethers");
const hardhat = require("hardhat");

const addressFrom = process.env.ADDRESS; // address from which bnb will be deposited
const addressTo = ''; // address to which the deposit will be made
const privateKey = process.env.PRIVATE_KEY // private key of your addressFrom should be like this 
const infuraUrl = process.env.MORALIS_URL;

const init1 = async () => {

    const provider = new ethers.providers.JsonRpcProvider(infuraUrl)
    let wallet = new ethers.Wallet(privateKey, provider)

    const networkId = await provider.getNetwork()
    console.log(networkId.chainId);

    const nonce = await provider.getTransactionCount(addressFrom);
    console.log(nonce);

    const transferEther = await wallet.sendTransaction({
        to: addressTo, 
        value: ethers.utils.parseEther("0.025"), // amount of BNB 
        gasPrice: 100,
        nonce, 
        chainId: networkId.chainId
    })

    await transferEther.wait()

    console.log(transferEther)

}

init1();
