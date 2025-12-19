import CryptoJS from 'crypto-js';

/**
 * Encrypts data using AES encryption with the provided password
 * @param {Object} data - The data to encrypt
 * @param {string} password - The password to use for encryption
 * @returns {string} Encrypted data as a string
 */
export const encryptData = (data, password) => {
  try {
    const jsonString = JSON.stringify(data);
    const encrypted = CryptoJS.AES.encrypt(jsonString, password).toString();
    return encrypted;
  } catch (error) {
    console.error('Encryption error:', error);
    throw new Error('Failed to encrypt data');
  }
};

/**
 * Decrypts data using AES decryption with the provided password
 * @param {string} encryptedData - The encrypted data string
 * @param {string} password - The password to use for decryption
 * @returns {Object} Decrypted data as an object
 */
export const decryptData = (encryptedData, password) => {
  try {
    const bytes = CryptoJS.AES.decrypt(encryptedData, password);
    const decryptedString = bytes.toString(CryptoJS.enc.Utf8);
    
    if (!decryptedString) {
      throw new Error('Invalid password or corrupted data');
    }
    
    return JSON.parse(decryptedString);
  } catch (error) {
    console.error('Decryption error:', error);
    throw new Error('Failed to decrypt data. Check your password.');
  }
};

/**
 * Validates if a password can successfully decrypt the data
 * @param {string} encryptedData - The encrypted data string
 * @param {string} password - The password to test
 * @returns {boolean} True if password is correct, false otherwise
 */
export const validatePassword = (encryptedData, password) => {
  try {
    decryptData(encryptedData, password);
    return true;
  } catch (error) {
    return false;
  }
};
