const Web3 = require('web3');
const Provider = require('@truffle/hdwallet-provider');
const { expect } = require("chai");
const { ethers, deployments } = require("hardhat");
const hre = require("hardhat");
const { BigNumber, utils } = require("ethers");
const hardhat = require("hardhat");

const address = process.env.ADDRESS;
const privateKey = process.env.PRIVATE_KEY;
const infuraUrl = process.env.MORALIS_URL; 

const init = async () => {

    const provider = new Provider(privateKey, infuraUrl); 
    const web3 = new Web3(provider);
    const networkId = await web3.eth.net.getId();
    
    const tx = new web3.eth.Contract(
        contractABI,
        contractAddress,
    );

    let receipt = await tx.methods.FUNCTION_NAME(
       params
    ).send({ from: address });

    let GasUsed = await web3.eth.getTransactionReceipt(receipt.transactionHash);
    console.log(`Transaction gasUsed: ${GasUsed.gasUsed}`);

}

init();