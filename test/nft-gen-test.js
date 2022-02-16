// const { expect } = require('chai');
// const { ethers } = require("hardhat")

// describe("MyNFT Smart Contract Tests", function() {

//     let BitFit

//     this.beforeEach(async function() {
//         // This is executed before each test
//         //Deploying the smart contract
//         const MyNFT = await ethers.getContractFactory("MyNFT");
//         BitFit = await MyNFT.deploy("BitFit Contract", "ART")
//     })

//     it("NFT is minted successfully", async function() {
//         [account1] = await ethers.getSigners();

//         expect(await BitFit.balanceOf(account1.address)).to.equal(0);
        
//         const tokenURI = "https://opensea-creatures-api.herokuapp.com/api/creature/1"
//         const tx = await BitFit.connect(account1).mint(tokenURI);

//         expect(await BitFit.balanceOf(account1.address)).to.equal(1);
//     })

//     it("tokenURI is set sucessfully", async function() {
//         [account1, account2] = await ethers.getSigners();

//         const tokenURI_1 = "https://opensea-creatures-api.herokuapp.com/api/creature/1"
//         const tokenURI_2 = "https://opensea-creatures-api.herokuapp.com/api/creature/2"

//         const tx1 = await BitFit.connect(account1).mint(tokenURI_1);
//         const tx2 = await BitFit.connect(account2).mint(tokenURI_2);

//         expect(await BitFit.tokenURI(0)).to.equal(tokenURI_1);
//         expect(await BitFit.tokenURI(1)).to.equal(tokenURI_2);


//     })

// })



const { expect } = require('chai');
const { ethers } = require("hardhat")

describe("Artwork Smart Contract Tests", function() {

    let artwork;

    this.beforeEach(async function() {
        // This is executed before each test
        // Deploying the smart contract
        const MyNFT = await ethers.getContractFactory("MyNFT");
        artwork = await MyNFT.deploy("Artwork Contract", "ART");
    })

    it("NFT is minted successfully", async function() {
        [account1] = await ethers.getSigners();

        expect(await artwork.balanceOf(account1.address)).to.equal(0);
        
        const tokenURI = "https://opensea-creatures-api.herokuapp.com/api/creature/1"
        const tx = await artwork.connect(account1).mint(tokenURI);

        expect(await artwork.balanceOf(account1.address)).to.equal(1);
    })

    it("tokenURI is set sucessfully", async function() {
        [account1, account2] = await ethers.getSigners();

        const tokenURI_1 = "https://opensea-creatures-api.herokuapp.com/api/creature/1"
        const tokenURI_2 = "https://opensea-creatures-api.herokuapp.com/api/creature/2"

        const tx1 = await artwork.connect(account1).mint(tokenURI_1);
        const tx2 = await artwork.connect(account2).mint(tokenURI_2);

        expect(await artwork.tokenURI(0)).to.equal(tokenURI_1);
        expect(await artwork.tokenURI(1)).to.equal(tokenURI_2);

    })

})