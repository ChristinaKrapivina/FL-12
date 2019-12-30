let userEmail;
let userPass;
let changePass;
let userNewPass;
let userNewPassConfirm;
let credentials = {
    'user@gmail.com': 'UserPass',
    'admin@gmail.com': 'AdminPass'
}

const emptyRegExp = '^\\s+$';
const five = 5;
const six = 6;

userEmail = prompt('Please enter your email:', 'email@gmail.com');

if(userEmail === null || userEmail.match(emptyRegExp)) {
    alert('Canceled');
} else if(userEmail.length < five) { 
    alert('I don\'t know any emails having name length less than 5 symbols');
} else if (credentials[userEmail]) {
    userPass = prompt('Please enter your password:', '');

    if(userPass === null || userPass.match(emptyRegExp)) {
        alert('Canceled');
    } else if(userPass !== credentials[userEmail]) {
        alert('Wrong password');
    }
} else {
    alert('I don\'t know you');
}

if(credentials[userEmail]) {
    changePass = confirm('Do you want to change your password?');

    if(changePass === false) {
        alert('You have failed the change.');
    } else {
        userPass = prompt('Please enter your old password:', '');
        
        if(userPass === null || userPass.match(emptyRegExp)) {
            alert('Canceled');
        } else if(userPass !== credentials[userEmail]) {
            alert('Wrong password');
        } else {
            userNewPass = prompt('Please enter your *new* password:', '');

            if(userNewPass === null || userNewPass.match(emptyRegExp)) {
                alert('Canceled');
            } else if(userNewPass.length < six) {
                alert('It\'s too short password. Sorry.')
            } else {
                userNewPassConfirm = prompt('Please enter your *new* password again:', '');
    
                if(userNewPassConfirm === null || userNewPassConfirm.match(emptyRegExp)) {
                    alert('Canceled');
                } else if(userNewPassConfirm !== userNewPass) {
                    alert('You wrote the wrong password.');
                } else {
                    alert('You have successfully changed your password.');
                }
            }
        }   
    }
}
