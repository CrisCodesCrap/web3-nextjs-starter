import { ethers } from "hardhat";

(async () => {
  const contract = await (await ethers.getContractFactory("TokenName")).deploy();

  await contract.deployed();

  console.log(`Contract deployed to ${contract.address}`);
})().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
