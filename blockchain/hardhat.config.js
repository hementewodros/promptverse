require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();
module.exports = {
  solidity: {
    version: "0.8.28", // or whichever version you want to use
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    sepolia: {
      url: process.env.RPC_URL,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
  // ... networks config, etc.
};

