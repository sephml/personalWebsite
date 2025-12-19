/**
 * Script to change password without losing data
 * 
 * This script:
 * 1. Decrypts existing data with OLD password
 * 2. Re-encrypts with NEW password
 * 3. Saves to privateData.enc
 * 
 * Usage:
 *   node scripts/changePassword.js "old-password" "new-password"
 */

const CryptoJS = require('crypto-js');
const fs = require('fs');
const path = require('path');

// Get passwords from command line
const oldPassword = process.argv[2];
const newPassword = process.argv[3];

if (!oldPassword || !newPassword) {
  console.error('❌ Error: Both old and new passwords required!');
  console.error('\nUsage:');
  console.error('  node scripts/changePassword.js "old-password" "new-password"');
  console.error('\nExample:');
  console.error('  node scripts/changePassword.js "abc123" "newpass456"');
  process.exit(1);
}

if (oldPassword === newPassword) {
  console.error('❌ Error: New password must be different from old password!');
  process.exit(1);
}

const dataFilePath = path.join(__dirname, '..', 'public', 'privateData.enc');

// Check if encrypted file exists
if (!fs.existsSync(dataFilePath)) {
  console.error('❌ Error: privateData.enc not found!');
  console.error(`Expected location: ${dataFilePath}`);
  process.exit(1);
}

try {
  // 1. Read encrypted file
  console.log('📖 Reading encrypted file...');
  const encryptedData = fs.readFileSync(dataFilePath, 'utf8');
  
  // 2. Decrypt with old password
  console.log('🔓 Decrypting with old password...');
  const bytes = CryptoJS.AES.decrypt(encryptedData, oldPassword);
  const decryptedString = bytes.toString(CryptoJS.enc.Utf8);
  
  if (!decryptedString) {
    throw new Error('Old password is incorrect!');
  }
  
  // Parse to verify it's valid JSON
  const data = JSON.parse(decryptedString);
  console.log('✅ Successfully decrypted data!');
  console.log(`   Found: ${data.memories?.length || 0} memories, ${data.notes?.length || 0} notes, ${data.movies?.length || 0} movies`);
  
  // 3. Re-encrypt with new password
  console.log('🔐 Re-encrypting with new password...');
  const newEncrypted = CryptoJS.AES.encrypt(decryptedString, newPassword).toString();
  
  // 4. Save to file
  console.log('💾 Saving to file...');
  fs.writeFileSync(dataFilePath, newEncrypted, 'utf8');
  
  console.log('\n✅ Password changed successfully!');
  console.log(`📁 File updated: ${dataFilePath}`);
  console.log(`🔐 Old password: ${oldPassword.substring(0, 3)}${'*'.repeat(oldPassword.length - 3)}`);
  console.log(`🔐 New password: ${newPassword.substring(0, 3)}${'*'.repeat(newPassword.length - 3)}`);
  console.log('\n📝 Next steps:');
  console.log('1. Update PRIVATE_PASSWORD in Netlify to: ' + newPassword);
  console.log('2. Commit and push the updated privateData.enc file');
  console.log('3. Tell users to clear localStorage and use new password');
  console.log('   (In browser console: localStorage.clear())');
  
} catch (error) {
  console.error('\n❌ Error:', error.message);
  console.error('\nPossible reasons:');
  console.error('- Old password is incorrect');
  console.error('- Encrypted file is corrupted');
  console.error('- File format is invalid');
  process.exit(1);
}
