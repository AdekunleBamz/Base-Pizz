// Remix IDE Deployment Configuration for UltraLowCostNFT
// Base Chain Deployment Settings

const deploymentConfig = {
    // Base Mainnet
    mainnet: {
        name: "UltraLowCostNFT",
        symbol: "ULCNFT",
        baseTokenURI: "https://your-metadata-server.com/nfts/",
        maxSupply: 10000,
        mintPrice: "0.00001", // ETH - Ultra low cost target
        network: "base-mainnet",
        chainId: 8453,
        rpcUrl: "https://mainnet.base.org",
        explorerUrl: "https://basescan.org"
    },
    
    // Base Sepolia (Testnet)
    sepolia: {
        name: "UltraLowCostNFT-Test",
        symbol: "ULCNFT-TEST",
        baseTokenURI: "https://test-metadata-server.com/nfts/",
        maxSupply: 1000,
        mintPrice: "0.00001", // ETH - Same target for testing
        network: "base-sepolia",
        chainId: 84532,
        rpcUrl: "https://sepolia.base.org",
        explorerUrl: "https://sepolia.basescan.org"
    }
};

module.exports = deploymentConfig;
