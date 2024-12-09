// Function to generate a referral code (simple version)
function generateReferralCode() {
  // Create a random 6-character code
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let referralCode = '';
  for (let i = 0; i < 6; i++) {
    referralCode += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  // Display the generated code in the input field
  document.getElementById('referral-code').value = referralCode;
}
