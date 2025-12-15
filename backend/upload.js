// backend/upload.js
// Express.js endpoint to handle NFT image and metadata upload via nft.storage
// Requires: npm install express multer nft.storage dotenv cors

require('dotenv').config();
const express = require('express');
const multer = require('multer');
const { NFTStorage, File } = require('nft.storage');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const upload = multer({ dest: 'uploads/' });
const NFT_STORAGE_KEY = process.env.NFT_STORAGE_KEY;
const client = new NFTStorage({ token: NFT_STORAGE_KEY });

app.use(cors());

app.post('/api/upload', upload.single('image'), async (req, res) => {
  try {
    const { name, description } = req.body;
    const imagePath = req.file.path;
    const imageData = fs.readFileSync(imagePath);
    const imageFile = new File([imageData], req.file.originalname, { type: req.file.mimetype });
    const metadata = await client.store({ name, description, image: imageFile });
    fs.unlinkSync(imagePath); // Clean up temp file
    res.json({ metadataUri: metadata.url });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`NFT upload backend running on port ${PORT}`);
});
