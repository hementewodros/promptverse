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

export const getContract = async () => {
  if (!window.ethereum) throw new Error("MetaMask not found");
  const provider = new BrowserProvider(window.ethereum);
  const contract = new Contract(contractAddress, contractABI, provider);
  return contract;
};

export const readCount = async () => {
  const contract = await getContract();
  const count = await contract.counter();
  return count.toString();
};

export const incrementCounter = async () => {
  const { contract } = await connectWallet();
  const tx = await contract.increment();
  await tx.wait();
};
