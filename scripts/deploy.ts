import { ethers } from "hardhat";
import { Signer, Wallet } from "ethers";

import {
  TMPToken,
  TMPToken__factory,
} from "../typechain";


async function main() {
  const accounts: Signer[] = await ethers.getSigners();
  const deployer: Wallet = <Wallet>accounts[0];

  console.log("Deploying Token:");
  const tmpTokenFactory: TMPToken__factory = (await ethers.getContractFactory(
    "contracts/TMPToken.sol:TMPToken",
    deployer,
  )) as TMPToken__factory;
  const tmpToken = await tmpTokenFactory.deploy();
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
