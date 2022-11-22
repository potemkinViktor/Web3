const Web3 = require('web3');
const Provider = require('@truffle/hdwallet-provider');
const { expect } = require("chai");
const { ethers, deployments } = require("hardhat");
const hre = require("hardhat");
const { BigNumber, utils } = require("ethers");
const hardhat = require("hardhat");

const address = '';
const privateKey = process.env.PRIVATE_KEY;
const infuraUrl = process.env.MORALIS_URL; 

const init = async () => {

    const provider = new Provider(privateKey, infuraUrl); 
    const web3 = new Web3(provider);
    const networkId = await web3.eth.net.getId();
    
    const nonce = await web3.eth.getTransactionCount(addressFrom);

    const signedTx = await web3.eth.accounts.signTransaction(
    {
        to: addressTo, 
        value: Web3.utils.toWei(`${0.1}`),
        gas: 60000,
        gasPrice: 100,
        nonce, 
        chainId: networkId
    },
    privateKey
  );
    
    const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
    console.log(`Transaction hash: ${receipt.transactionHash}`);

    let GasUsed = await web3.eth.getTransactionReceipt(receipt.transactionHash);
    console.log(`Transaction v1 ether 2 parametrs: ${GasUsed.gasUsed}`);

}

init();