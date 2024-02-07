function validateNationalID() {
    var nid = document.getElementById('nid').value;
    if (nid.length !== 16) {
    document.getElementById('Errormessage').innerText = 'National ID must be exactly 16 digits.';
} else {
    document.getElementById('Errormessage').innerText = '';
}
}

    function validateBirthDate() {
    var birthDate = document.getElementsByName('selectedDate')[0].value;
    var currentDate = new Date();
    var selectedDate = new Date(birthDate);
    if (selectedDate > currentDate) {
    document.getElementById('Errormessage').innerText = 'Please select a valid birth date.';
} else {
    document.getElementById('Errormessage').innerText = '';
}
}

    function validatePhoneNumber() {
    var phoneNumber = document.getElementsByName('phone_number')[0].value;
    if (phoneNumber.length !== 12 || phoneNumber[0] !== '+') {
    document.getElementById('Errormessage').innerText = 'Please enter a valid phone number starting with "+".';
} else {
    document.getElementById('Errormessage').innerText = '';
}
}

    function validatePassword() {
    var password = document.getElementById('password').value;
    if (password.length < 8) {
    document.getElementById('Errormessage').innerText = 'Password must be at least 8 characters long.';
} else {
    document.getElementById('Errormessage').innerText = '';
}
}

    function validateEmail() {
    var email = document.getElementsByName('email')[0].value;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
    document.getElementById('Errormessage').innerText = 'Please enter a valid email address.';
} else {
    document.getElementById('Errormessage').innerText = '';
}
}

    function validateForm() {
    // Call other validation functions if needed
    validateNationalID();
    validateBirthDate();
    validatePhoneNumber();
    validatePassword();
    validateEmail();
}

    document.getElementById("Validation").addEventListener("submit", function(event) {
    if (document.getElementById("passwordError").innerHTML) {
        event.preventDefault();
        alert("Please fix the password errors before submitting the form.");
    }
});