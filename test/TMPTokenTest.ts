import { ethers, network } from "hardhat";
import { Signer, Wallet, BigNumber } from "ethers";
import { expect } from "chai";
import {
  ERC20,
  TMPToken,
  TMPToken__factory,
} from "../typechain";



describe("SiloTokenTest", () => {
  let accounts: Signer[];
  let owner: Wallet;
  let a1: Wallet;
  let a2: Wallet;
  let attacker: Wallet;
  let ownerBalance: BigNumber;
  let tmpToken: ERC20;
  

  beforeEach(async () => {
    accounts = await ethers.getSigners();
    owner = <Wallet>accounts[0];
    attacker = <Wallet>accounts[1];
    a1 = <Wallet>accounts[2];
    a2 = <Wallet>accounts[3];

    const tmpTokenFactory: TMPToken__factory = (await ethers.getContractFactory(
      "contracts/TMPToken.sol:TMPToken",
      owner,
    )) as TMPToken__factory;
    tmpToken = await tmpTokenFactory.deploy();
    ownerBalance = await tmpToken.balanceOf(owner.address);
  });


  it('it should assign supply to owner', async () => {
    expect(await tmpToken.totalSupply()).to.equal(ownerBalance);
  })

  
  it('it should transfer', async () => {
    await tmpToken.transfer(a1.address, 50);
    expect(await tmpToken.balanceOf(a1.address)).to.equal(50);
    await tmpToken.connect(a1).transfer(a2.address, 5);
    expect(await tmpToken.balanceOf(a2.address)).to.equal(5);
  })

  it("Should fail if sender doesn’t have enough tokens", async function () {
    await expect(
      tmpToken.connect(a1).transfer(owner.address, 1)
    ).to.be.revertedWith("transfer amount exceeds balance");

    // Owner balance shouldn't have changed.
    expect(await tmpToken.balanceOf(owner.address)).to.equal(ownerBalance);
  });
  
});



