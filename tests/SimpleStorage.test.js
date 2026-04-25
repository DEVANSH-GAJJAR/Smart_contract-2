const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("SimpleStorage", function () {
  let simpleStorage;
  let owner;
  let addr1;

  beforeEach(async function () {
    [owner, addr1] = await ethers.getSigners();
    const SimpleStorage = await ethers.getContractFactory("SimpleStorage");
    simpleStorage = await SimpleStorage.deploy(42);
    await simpleStorage.waitForDeployment();
  });

  it("Should deploy with the correct initial value", async function () {
    expect(await simpleStorage.get()).to.equal(42);
  });

  it("Should store a new value when called by owner", async function () {
    await simpleStorage.set(100);
    expect(await simpleStorage.get()).to.equal(100);
  });

  it("Should emit ValueChanged event on set", async function () {
    await expect(simpleStorage.set(99))
      .to.emit(simpleStorage, "ValueChanged")
      .withArgs(owner.address, 99);
  });

  it("Should revert when non-owner calls set", async function () {
    await expect(simpleStorage.connect(addr1).set(200)).to.be.revertedWith(
      "Not the owner"
    );
  });

  it("Should expose the correct owner address", async function () {
    expect(await simpleStorage.owner()).to.equal(owner.address);
  });
});