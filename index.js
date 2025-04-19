function calculateTax(amount) {
    const tax = amount * 0.10;
    return tax;
  }
  
  function convertToUpperCase(text) {
    return text.toUpperCase();
  }
  
  function findMaximum(num1, num2) {
    return num1 > num2 ? num1 : num2;
  }
  
  function isPalindrome(word) {
    const reversed = word.split('').reverse().join('');
    return word === reversed;
  }
  
  function calculateDiscountedPrice(originalPrice, discountPercentage) {
    const discountAmount = (originalPrice * discountPercentage) / 100;
    return originalPrice - discountAmount;
  }
  
  




// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };