/**
 * Script to generate encrypted data file for the private page
 * 
 * Usage:
 * Set PRIVATE_PASSWORD environment variable (in Netlify or locally)
 * Then run: node scripts/generateEncryptedData.js
 * 
 * Or provide password as argument:
 *   node scripts/generateEncryptedData.js "your-password"
 */

const CryptoJS = require('crypto-js');
const fs = require('fs');
const path = require('path');

// Get password from: command line arg > environment variable > error
const password = process.argv[2] || process.env.PRIVATE_PASSWORD;

if (!password) {
  console.error('❌ Error: No password provided!');
  console.error('\nPlease either:');
  console.error('1. Set PRIVATE_PASSWORD environment variable');
  console.error('2. Run: node scripts/generateEncryptedData.js "your-password"');
  console.error('\nFor Netlify: Set PRIVATE_PASSWORD in Site Settings > Environment Variables');
  process.exit(1);
}

// Initial data structure
const initialData = {
  memories: [
    {
      title: "Welcome to Our Private Space",
      date: new Date().toISOString().split('T')[0],
      description: "This is your special place to store memories, notes, photos, and track movies/series. Start by adding your first real memory!",
      feeling: "Excited",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }
  ],
  notes: [
    {
      title: "Getting Started",
      content: "Welcome! Here you can:\n\n1. Add memories in the Memories tab\n2. Keep shared notes here\n3. Track movies & series you watch together\n\nEverything is encrypted with your password!",
      category: "general",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }
  ],
  movies: [],
  lastUpdated: new Date().toISOString()
};

// Encrypt the data
const jsonString = JSON.stringify(initialData);
const encrypted = CryptoJS.AES.encrypt(jsonString, password).toString();

// Write to file
const outputPath = path.join(__dirname, '..', 'public', 'privateData.enc');
fs.writeFileSync(outputPath, encrypted, 'utf8');

console.log('✅ Encrypted data file generated successfully!');
console.log(`📁 Location: ${outputPath}`);
console.log(`🔐 Password: ${password.substring(0, 3)}${'*'.repeat(password.length - 3)}`);
console.log('\n💡 Password source:');
if (process.argv[2]) {
  console.log('   • Command line argument');
} else {
  console.log('   • Environment variable (PRIVATE_PASSWORD)');
}
console.log('\n📝 For Netlify deployment:');
console.log('   1. Go to Site Settings > Environment Variables');
console.log('   2. Add: PRIVATE_PASSWORD = your-password');
console.log('   3. Commit and push the generated privateData.enc file');
