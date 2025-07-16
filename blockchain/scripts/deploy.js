const hre = require("hardhat");

async function main() {
  // Get the contract factory for Voting
  const Voting = await hre.ethers.getContractFactory("Voting");
  
  // Deploy the Voting contract
  const voting = await Voting.deploy();

  // Wait for the deployment to be mined
  await voting.waitForDeployment();

  // Log the deployed contract address
  console.log(`Voting contract deployed to: ${voting.target}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
