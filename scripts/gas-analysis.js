// Gas Cost Analysis for UltraLowCostNFT on Base Chain
// Calculate exact costs for different scenarios

const gasAnalysis = {
    // Base chain gas price (can vary, using conservative estimate)
    gasPrice: "0.000000001", // 1 gwei
    
    // Gas estimates for different operations
    operations: {
        singleMint: 21000,
        batchMintPerNFT: 18000,
        batchMint10PerNFT: 17500,
        contractDeployment: 2500000
    },
    
    // Calculate costs in ETH and USD
    calculateCosts() {
        const ethPrice = 2000; // USD per ETH (approximate)
        
        console.log("🔍 GAS COST ANALYSIS - Base Chain");
        console.log("=====================================");
        
        // Single mint
        const singleMintETH = this.operations.singleMint * parseFloat(this.gasPrice);
        const singleMintUSD = singleMintETH * ethPrice;
        
        console.log("\n💰 SINGLE MINT:");
        console.log(`Gas: ${this.operations.singleMint.toLocaleString()}`);
        console.log(`Cost: ${singleMintETH} ETH ($${singleMintUSD.toFixed(4)})`);
        
        // Batch mint (5 NFTs)
        const batch5ETH = this.operations.batchMintPerNFT * 5 * parseFloat(this.gasPrice);
        const batch5USD = batch5ETH * ethPrice;
        const perNft5 = batch5ETH / 5;
        
        console.log("\n🔥 BATCH MINT (5 NFTs):");
        console.log(`Gas per NFT: ${this.operations.batchMintPerNFT.toLocaleString()}`);
        console.log(`Total Cost: ${batch5ETH} ETH ($${batch5USD.toFixed(4)})`);
        console.log(`Per NFT: ${perNft5} ETH ($${(perNft5 * ethPrice).toFixed(4)})`);
        
        // Batch mint (10 NFTs)
        const batch10ETH = this.operations.batchMint10PerNFT * 10 * parseFloat(this.gasPrice);
        const batch10USD = batch10ETH * ethPrice;
        const perNft10 = batch10ETH / 10;
        
        console.log("\n🚀 BATCH MINT (10 NFTs):");
        console.log(`Gas per NFT: ${this.operations.batchMint10PerNFT.toLocaleString()}`);
        console.log(`Total Cost: ${batch10ETH} ETH ($${batch10USD.toFixed(4)})`);
        console.log(`Per NFT: ${perNft10} ETH ($${(perNft10 * ethPrice).toFixed(4)})`);
        
        // Comparison with Ethereum
        console.log("\n⚡ COST COMPARISON:");
        console.log("Base Chain vs Ethereum Mainnet");
        console.log("Base: ~$0.02 per mint");
        console.log("Ethereum: ~$15-50 per mint");
        console.log("💡 Savings: 95%+ cheaper!");
        
        // Contract deployment
        const deploymentETH = this.operations.contractDeployment * parseFloat(this.gasPrice);
        const deploymentUSD = deploymentETH * ethPrice;
        
        console.log("\n🏗️ CONTRACT DEPLOYMENT:");
        console.log(`Gas: ${this.operations.contractDeployment.toLocaleString()}`);
        console.log(`Cost: ${deploymentETH} ETH ($${deploymentUSD.toFixed(2)})`);
        
        return {
            singleMint: singleMintETH,
            batch5Total: batch5ETH,
            batch5PerNFT: perNft5,
            batch10Total: batch10ETH,
            batch10PerNFT: perNft10,
            deployment: deploymentETH
        };
    },
    
    // Test scenarios
    testScenarios() {
        console.log("\n📊 TEST SCENARIOS:");
        console.log("==================");
        
        const scenarios = [
            { name: "Small Collection (100 NFTs)", count: 100, type: "batch" },
            { name: "Medium Collection (1,000 NFTs)", count: 1000, type: "batch" },
            { name: "Large Collection (10,000 NFTs)", count: 10000, type: "batch" }
        ];
        
        scenarios.forEach(scenario => {
            const batchSize = 10;
            const batches = Math.ceil(scenario.count / batchSize);
            const totalETH = batches * this.operations.batchMint10PerNFT * batchSize * parseFloat(this.gasPrice);
            const totalUSD = totalETH * 2000;
            
            console.log(`\n${scenario.name}:`);
            console.log(`  NFTs: ${scenario.count.toLocaleString()}`);
            console.log(`  Batches: ${batches}`);
            console.log(`  Total Cost: ${totalETH.toFixed(4)} ETH ($${totalUSD.toFixed(2)})`);
            console.log(`  Per NFT: ${(totalETH / scenario.count).toFixed(6)} ETH`);
        });
    }
};

// Run analysis
const results = gasAnalysis.calculateCosts();
gasAnalysis.testScenarios();

module.exports = gasAnalysis;
