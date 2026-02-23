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
  const commonPasswords = [
    "password",
    "12345678",
    "qwerty123",
    "admin123",
    "letmein"
  ];

  if (password.length < 8) errors.push("Password must be at least 8 characters.");
  if (!/[A-Za-z]/.test(password)) errors.push("Password must include at least one letter.");
  if (!/[0-9]/.test(password)) errors.push("Password must include at least one number.");
  // ✅ NEW RULE 1: Require special character
  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password))
    errors.push("Password must include at least one special character.");

  // ✅ NEW RULE 2: Block common passwords
  if (commonPasswords.includes(password.toLowerCase()))
    errors.push("Password is too common. Please choose a stronger password.");



  return { ok: errors.length === 0, errors };
}

module.exports = { validatePassword };
