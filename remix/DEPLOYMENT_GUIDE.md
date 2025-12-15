# Remix IDE Deployment Guide - Ultra Low Cost NFT Minter

## 🚀 Quick Start for Remix IDE

### Step 1: Setup Remix IDE
1. Go to [Remix IDE](https://remix.ethereum.org/)
2. Create a new workspace called "Base NFT Minter"
3. Install Base network plugin:
   - Go to Plugins → Install Base Network plugin
   - Activate the Base Network plugin

### Step 2: Upload Contract Files
1. Create new file: `UltraLowCostNFT.sol`
2. Copy the contract code from `/contracts/UltraLowCostNFT.sol`
3. The contract will auto-compile with OpenZeppelin imports

### Step 3: Configure Base Network
1. In Remix, click on the Base Network plugin
2. Set network to **Base Sepolia** (for testing first)
3. Connect your MetaMask wallet to Base Sepolia
4. Get test ETH from [Base Sepolia Faucet](https://www.alchemy.com/faucets/base-sepolia)

### Step 4: Deploy Contract
1. In Remix, go to Deploy tab
2. Select **UltraLowCostNFT** contract
3. Configure constructor parameters:
   ```
   _name: "UltraLowCostNFT"
   _symbol: "ULCNFT"
   _baseTokenURI: "https://your-metadata-server.com/nfts/"
   _maxSupply: 1000 (for testing) / 10000 (for mainnet)
   _mintPrice: "10000000000000" (wei = 0.00001 ETH)
   ```
4. Click **Deploy** with sufficient ETH for gas

### Step 5: Verify Deployment
1. Check transaction in [Base Sepolia Explorer](https://sepolia.basescan.org)
2. Copy the deployed contract address
3. Update the contract address in `frontend/index.html`
4. Test minting functionality

## 🌐 Base Network Information

### Base Mainnet
- **Chain ID**: 8453
- **RPC**: https://mainnet.base.org
- **Explorer**: https://basescan.org
- **Currency**: ETH
- **Gas Target**: 0.00001 ETH per mint

### Base Sepolia (Testnet)
- **Chain ID**: 84532
- **RPC**: https://sepolia.base.org
- **Explorer**: https://sepolia.basescan.org
- **Currency**: ETH (test)
- **Purpose**: Testing before mainnet deployment

## 💰 Gas Cost Analysis

### Estimated Gas Usage (Base Chain)
- **Single Mint**: ~21,000 gas ≈ 0.00001 ETH
- **Batch Mint (5)**: ~18,000 gas per NFT ≈ 0.0000086 ETH
- **Batch Mint (10)**: ~17,500 gas per NFT ≈ 0.0000084 ETH

### Cost Comparison
| Network | Gas Cost per Mint | USD Cost (at $2000/ETH) |
|---------|------------------|------------------------|
| Ethereum | ~$15-50 | $30-100 |
| Base | ~0.00001 ETH | $0.02 |
| **Savings** | **95%+ cheaper** | **99%+ cheaper** |

## 🔧 Constructor Parameters Explained

```solidity
constructor(
    string memory _name,        // "UltraLowCostNFT"
    string memory _symbol,      // "ULCNFT"
    string memory _baseTokenURI, // Your metadata base URL
    uint256 _maxSupply,         // 10000 (recommended)
    uint256 _mintPrice          // 10000000000000 (wei = 0.00001 ETH)
)
```

## 📊 Post-Deployment Steps

### 1. Contract Verification
```bash
# Verify contract on BaseScan (optional)
# Use BaseScan verification tools in Remix
```

### 2. Update Frontend
- Replace `CONTRACT_ADDRESS` in `frontend/index.html`
- Test all functionality
- Deploy frontend to hosting service

### 3. Configure Metadata
- Set up metadata hosting (IPFS, Arweave, or server)
- Update base token URI if needed
- Ensure JSON metadata files are accessible

### 4. Start Sale
```solidity
// Call this function to start minting
setSaleStatus(true);
```

## 🛡️ Security Checklist

- [ ] Contract verified on BaseScan
- [ ] Owner address is correct
- [ ] Mint price is appropriate
- [ ] Max supply is set correctly
- [ ] Sale is initially disabled
- [ ] Metadata hosting is stable
- [ ] Frontend contract address is updated

## 🔍 Troubleshooting

### Common Issues
1. **Out of Gas**: Increase gas limit in Remix
2. **Wrong Network**: Switch to Base network in MetaMask
3. **Insufficient Balance**: Get test ETH from faucet
4. **Contract Not Found**: Wait for deployment confirmation

### Network Issues
- Check Base network status at https://status.base.org/
- Try alternative RPC: https://base-mainnet.g.alchemy.com/v2/

## 📱 Testing Checklist

### Function Tests
- [ ] `mint()` - Single NFT minting
- [ ] `mintBatch()` - Multiple NFT minting
- [ ] `totalSupply()` - Supply tracking
- [ ] `setSaleStatus()` - Sale control
- [ ] `setMintPrice()` - Price updates
- [ ] `withdraw()` - Fund withdrawal

### Frontend Tests
- [ ] Wallet connection
- [ ] Network switching
- [ ] Minting interface
- [ ] Transaction status
- [ ] Error handling

## 🎯 Production Deployment

### Mainnet Deployment
1. Test thoroughly on Base Sepolia
2. Deploy to Base Mainnet
3. Verify contract on BaseScan
4. Update production frontend
5. Announce minting to community

### Recommended Settings
- **Max Supply**: 10,000
- **Mint Price**: 0.00001 ETH
- **Max Per TX**: 10
- **Sale Start**: Manual activation

---

**Ready to deploy? Follow this guide step by step for a successful launch!** 🚀
