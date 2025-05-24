/**
 * Block Dice Game Result Verification Tool
 * Input: Dice result, salt, timestamp
 * Output: Corresponding hash for comparison with the committed hash shown before the game starts
 */

const crypto = require('crypto');

/**
 * Compute the result hash
 * @param {string} diceResult Dice result string (e.g., "3,5,1")
 * @param {string} salt Random salt string
 * @param {string} timestamp Timestamp string (e.g., "1685000000")
 * @returns {string} SHA-256 hash (hex format)
 */
function computeHash(diceResult, salt, timestamp) {
  const inputStr = `${timestamp}|${salt}|${diceResult}`;
  return crypto.createHash('sha256').update(inputStr).digest('hex');
}

// Example usage: node verifyResult.js "3,5,1" "randomSalt123" "1685000000"
if (require.main === module) {
  const args = process.argv.slice(2);
  if (args.length !== 3) {
    console.error('Usage: node verifyResult.js <diceResult> <salt> <timestamp>');
    process.exit(1);
  }

  const [diceResult, salt, timestamp] = args;
  const hash = computeHash(diceResult, salt, timestamp);
  console.log('Computed Hash:', hash);
}

module.exports = { computeHash };
