import { ethers, network } from "hardhat";
import { Signer, Wallet } from "ethers";

import {
  TMPToken,
  TMPToken__factory,
} from "../typechain";


async function main() {
  const accounts: Signer[] = await ethers.getSigners();
  const deployer: Wallet = <Wallet>accounts[0];

  const factory: TMPToken__factory = (await ethers.getContractFactory(
    "contracts/TMPToken.sol:TMPToken",
    deployer,
  )) as TMPToken__factory;
  const tmpToken = await factory.deploy();

  let contract;

  if (network.name==='kovan'){
    contract = await factory.deploy();
  }else if (network.name==='localhost'){
    // assume mainnet fork
    contract = await factory.deploy();
  }else{
    console.error('only kovan and localhost supported');
  }
  
  if (contract) console.log("...deployed aave flash loan contract to address:", contract.address);

}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
