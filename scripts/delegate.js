// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const { ethers } = require("hardhat");

async function main() {
  const implementationAddress = "0x37b4989BE87d5cE29d63154332E72789589564c6"; // !!! paste here your deployed smart contract address !!!

  // Deploying the minimal proxy
  const MinimalProxy = await ethers.getContractFactory("MinimalProxy");
  const minimalProxy = await MinimalProxy.deploy(implementationAddress);
  await minimalProxy.waitForDeployment();

  console.log("Minimal Proxy deployed to:", minimalProxy.target);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
