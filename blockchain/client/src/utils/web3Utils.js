import { BrowserProvider, Contract } from "ethers";
import { contractAddress } from "../constants/contractAddress";
import { contractABI } from "../constants/contractABI";

// Ensures signer is connected to MetaMask and returns contract instance
export const connectWallet = async () => {
  if (!window.ethereum) throw new Error("MetaMask not found");

  // Request user accounts first
  await window.ethereum.request({ method: "eth_requestAccounts" });

  // Try to switch the network to Sepolia (chainId 0xaa36a7)
  try {
    await window.ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: "0xaa36a7" }], // Sepolia chain ID in hex
    });
  } catch (switchError) {
    // Handle the case where the chain is not added in MetaMask
    if (switchError.code === 4902) {
      // This error code means the chain has not been added to MetaMask
      try {
        await window.ethereum.request({
          method: "wallet_addEthereumChain",
          params: [
            {
              chainId: "0xaa36a7",
              chainName: "Sepolia Testnet",
              rpcUrls: ["https://rpc.sepolia.org"], // RPC URL for Sepolia
              nativeCurrency: {
                name: "Sepolia ETH",
                symbol: "SEP", // Usually ETH symbol or similar
                decimals: 18,
              },
              blockExplorerUrls: ["https://sepolia.etherscan.io"],
            },
          ],
        });
      } catch (addError) {
        throw new Error("Failed to add Sepolia network to MetaMask");
      }
    } else {
      throw new Error("Failed to switch to Sepolia network");
    }
  }

  const provider = new BrowserProvider(window.ethereum);
  const signer = await provider.getSigner();
  const contract = new Contract(contractAddress, contractABI, signer);

  return { signer, contract };
};


// Returns a read-only contract instance
export const getContract = async () => {
  if (!window.ethereum) throw new Error("MetaMask not found");

  const provider = new BrowserProvider(window.ethereum);
  const contract = new Contract(contractAddress, contractABI, provider);
  return contract;
};

// Reads the current counter value
export const readCount = async () => {
  const contract = await getContract();
  const count = await contract.counter(); // or .count() depending on your contract
  return count.toString();
};

// Sends a transaction to increment the counter
export const incrementCounter = async () => {
  const { contract } = await connectWallet();
  const tx = await contract.increment();
  await tx.wait(); // wait for transaction to be mined
};
