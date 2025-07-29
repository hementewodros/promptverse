# 🗳️ PromptVerse – A Web3-Powered Prompt Voting Platform

PromptVerse is a decentralized application (dApp) that lets users **submit**, **vote**, and **track creative prompts** on the Ethereum blockchain. Built in 30 days as part of a build sprint, it demonstrates the core mechanics of a full-stack Web3 platform using smart contracts, React, and Ethers.js.

---

## 🚀 Live on Sepolia Testnet

**Smart Contract Address:**  (Not Updated)
[`0x5B6FfDa31d9E36Dd3532F380Ed0cADd1BD23B5ca`](https://sepolia.etherscan.io/address/0x5B6FfDa31d9E36Dd3532F380Ed0cADd1BD23B5ca)

---

## ✨ Features

- ✅ Connect Wallet with MetaMask  
- ✅ Add New Proposals (Creative Prompts)  
- ✅ Vote on Existing Proposals  
- ✅ Track Vote Count in Real-Time  
- ✅ Event Listener for Counter Demo  
- ⏳ Prompt NFT Minting (Coming Soon)  
- ⏳ Reputation and Creator Reward System (Coming Soon)

---

## 🛠️ Tech Stack

| Layer            | Technology                |
|------------------|---------------------------|
| **Frontend**     | React, Ethers.js          |
| **Smart Contract** | Solidity, Hardhat       |
| **Blockchain**   | Ethereum Sepolia Testnet  |
| **Wallet**       | MetaMask                  |

---

## 📁 Project Structure
promptverse/ ├── blockchain/              # Solidity contracts & deployment scripts │   └── contracts/           # Counter.sol smart contract │   └── scripts/             # Deployment script │   └── artifacts/           # ABI output after compile │ ├── client/                  # Frontend React app │   └── components/          # ProposalForm.js, ProposalList.js │   └── utils/               # web3Utils.js for contract interaction │   └── constants/           # contractABI and contractAddress │   └── App.js               # Main UI logic

---

## 🔧 Getting Started

### 1. Clone the repository

```bash
git clone https://hemen-tewodros/promptverse.git
cd promptverse

2. Install dependencies

cd blockchain
npm install

cd ../client
npm install

3. Compile and Deploy Smart Contract

Set your .env file in /blockchain with your private key and RPC URL.

npx hardhat compile
npx hardhat run scripts/deploy.js --network sepolia

> Make sure to fund your wallet with Sepolia ETH via https://sepoliafaucet.com



4. Run the Frontend

cd client
npm start

Then go to http://localhost:3000


---

🧠 Project Vision

PromptVerse is the first step toward a decentralized prompt economy — enabling users to submit ideas, vote democratically, and potentially earn rewards via smart contracts. Future features may include:

Prompt NFTs with resale royalties

AI prompt marketplaces

DAO-based creative curation

Token-gated voting or tiers



---

📬 Contributing & Feedback

Contributions are welcome. Feel free to fork, open issues, or submit PRs.


---

📝 License

MIT License
© 2025 PromptVerse
