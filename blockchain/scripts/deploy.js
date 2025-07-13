const hre = require("hardhat");

async function main() {
  const Counter = await hre.ethers.getContractFactory("Counter");
  const counter = await Counter.deploy();

  await counter.waitForDeployment();

  console.log(`Contract deployed to: ${counter.target}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
