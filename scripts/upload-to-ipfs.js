// upload-to-ipfs.js
// Node.js script to upload images and metadata to IPFS using nft.storage
// Requires: npm install nft.storage dotenv

require('dotenv').config();
const { NFTStorage, File } = require('nft.storage');
const fs = require('fs');
const path = require('path');

const NFT_STORAGE_KEY = process.env.NFT_STORAGE_KEY;
if (!NFT_STORAGE_KEY) {
  console.error('Please set NFT_STORAGE_KEY in your .env file');
  process.exit(1);
}

const client = new NFTStorage({ token: NFT_STORAGE_KEY });

async function uploadImageAndMetadata(imagePath, name, description) {
  const imageData = fs.readFileSync(imagePath);
  const imageFile = new File([imageData], path.basename(imagePath), { type: 'image/png' });

  const metadata = await client.store({
    name,
    description,
    image: imageFile,
  });

  console.log('Metadata URI:', metadata.url);
  return metadata.url;
}

// Example usage:
// node upload-to-ipfs.js ./myimage.png "NFT Name" "NFT Description"
if (require.main === module) {
  const [,, img, name, desc] = process.argv;
  if (!img || !name || !desc) {
    console.log('Usage: node upload-to-ipfs.js <imagePath> <name> <description>');
    process.exit(1);
  }
  uploadImageAndMetadata(img, name, desc);
}
