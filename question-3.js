// Question #3
let userPassword = "abcde";
// เริ่มเขียนโค้ดตรงนี้

function checkPasswordStrength(password) {
  if (password.length < 6) {
    return "Weak";
  } else if (password.length >= 6 && password.length <= 10) {
    return "Medium";
  } else if (password.length > 10) {
    return "Strong";
  }
}

console.log(checkPasswordStrength(userPassword));
