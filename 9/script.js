function validateForm() {
    const firstName = document.getElementById("firstName").value;
    const password = document.getElementById("password").value;
    const email = document.getElementById("email").value;
    const mobileNumber = document.getElementById("mobileNumber").value;
    const lastName = document.getElementById("lastName").value;
    const address = document.getElementById("address").value;
    if (!validateFirstName(firstName)) {
      alert("First Name is invalid. It should contain alphabets only and have a minimum length of 6 characters.");
      return false;
    }
    if (!validatePassword(password)) {
      alert("Password is invalid. It should have a minimum length of 6 characters.");
      return false;
    }
    if (!validateEmail(email)) {
      alert("Email is invalid. It should follow the standard pattern name@domain.com.");
      return false;
    }
    if (!validateMobileNumber(mobileNumber)) {
      alert("Mobile Number is invalid. It should contain 10 digits only.");
      return false;
    }
    if (!validateNonEmptyField(lastName)) {
      alert("Last Name is required.");
      return false;
    }
    if (!validateNonEmptyField(address)) {
      alert("Address is required.");
      return false;
    }
    return true;
  }
 function validateFirstName(firstName) {
    const regex = /^[a-zA-Z]{6,}$/;
    return regex.test(firstName);
  }
  function validatePassword(password) {
    return password.length >= 6;
  }
  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
  function validateMobileNumber(mobileNumber) {
    const regex = /^\d{10}$/;
    return regex.test(mobileNumber);
  }
  function validateNonEmptyField(value) {
    return value.trim() !== "";
  }