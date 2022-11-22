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
    
    let arrayAddress = [];
    let arrayPrivateKey = [];
    let newWallet = web3.eth.accounts.create();
    arrayAddress.push(newWallet.address);
    arrayPrivateKey.push(newWallet.privateKey);

}

init();