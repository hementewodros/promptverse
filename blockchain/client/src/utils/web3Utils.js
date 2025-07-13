// src/utils/web3Utils.js
import { BrowserProvider, Contract } from "ethers";
import { contractAddress } from "../constants/contractAddress";
import { contractABI } from "../constants/contractABI";

export const connectWallet = async () => {
  if (!window.ethereum) throw new Error("MetaMask not found");

  await window.ethereum.request({ method: "eth_requestAccounts" });

  const provider = new BrowserProvider(window.ethereum);
  const signer = await provider.getSigner();
  const contract = new Contract(contractAddress, contractABI, signer);

  return { signer, contract };
};
export const readCount = async () => {
  const provider = new BrowserProvider(window.ethereum);
  const contract = new Contract(contractAddress, contractABI, provider);
  const count = await contract.counter();  // ✅ this will now exist
  return count.toString();
};
export const incrementTo1000 = async () => {
  if (!window.ethereum) throw new Error("MetaMask not found");

  const provider = new BrowserProvider(window.ethereum);
  const signer = await provider.getSigner();
  const contract = new Contract(contractAddress, contractABI, signer);

  const tx = await contract.count(); // Calls function that sets counter to 1000
  await tx.wait(); // Wait for the transaction to be mined
};


