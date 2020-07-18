
function validateUname() {
    var uname = document.getElementById("uname").value;
    if (isAvailable(uname)) {
        document.getElementById('uname-msg').innerHTML = 'Username available';
    }
}

function isAvailable(uname) {
    return true;
}

function validateEmail() {
    var email       = document.getElementById("email").value;
    var emailRegex  = new RegExp('[a-zA-A_.0-9]+@[a-zA-Z]*.[a-zA-A]+');

    if (!emailRegex.test(email)) {
        document.getElementById('email-msg').innerHTML = 'Please enter valid email';
    } else {
        document.getElementById('email-msg').innerHTML = '';
    }
}

function validatePass() {
    var pass        = document.getElementById("pass").value;
    var lenRegex    = new RegExp('[a-zA-Z0-9#$%^&@!*]{8,}');
    var specRegex   = new RegExp('.*[!@#$%^&*].*');
    var capRegex    = new RegExp('.*[A-Z].*');

    var passMsg = document.getElementById('pass-msg');
    if (!lenRegex.test(pass)) {
        passMsg.innerHTML = 'Password should be 8 characters long';
    } else if (!specRegex.test(pass)) {
        passMsg.innerHTML = 'Password should contain atleast on special character';
    } else if (!capRegex.test(pass)) {
        passMsg.innerHTML = 'Password should contain atleast one capital letter';
    } else {
        passMsg.innerHTML = '';
    }
}

function validateConPass() {
    var pass    = document.getElementById('pass').value;
    var conPass = document.getElementById('con-pass').value;

    if (pass != conPass) {
        document.getElementById('con-pass-msg').innerHTML = 'Confirm Password should match password';
    } else {
        document.getElementById('con-pass-msg').innerHTML = '';
    }
}

function validateForm() {
    var unameMsg    = document.getElementById('uname-msg').innerHTML;
    var emailMsg    = document.getElementById('email-msg').innerHTML;
    var passMsg     = document.getElementById('pass-msg').innerHTML;
    var conPassMsg  = document.getElementById('con-pass-msg').innerHTML;
    
    if (unameMsg == 'Username available' && emailMsg == '' && passMsg == '' && conPassMsg == '') {
        alert('Form submitted');
        return true;
    }
    alert('Validation failed');
    return false;
}