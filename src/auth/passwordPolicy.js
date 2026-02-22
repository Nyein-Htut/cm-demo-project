/**
 * Password policy rules (demo)
 * - At least 8 characters
 * - Must include a letter and a number
 * 
 * Change request idea (CR-001):
 * - Add: require one special character
 * - Add: block common passwords
 */

function validatePassword(password) {
  const errors = [];
  if (password.length < 8) errors.push("Password must be at least 8 characters.");
  if (!/[A-Za-z]/.test(password)) errors.push("Password must include at least one letter.");
  if (!/[0-9]/.test(password)) errors.push("Password must include at least one number.");

  return { ok: errors.length === 0, errors };
}

module.exports = { validatePassword };
