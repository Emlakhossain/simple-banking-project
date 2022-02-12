document.getElementById('login-btn').addEventListener('click', function () {
    // get user email concept
    const userEmailField = document.getElementById('user-id');
    const userEmail = userEmailField.value;
    // console.log(userEmail)

    // get user password
    const userPasswordField = document.getElementById('user-password');
    const userPassword = userPasswordField.value;
    // console.log(userPassword)
    if (userEmail == 'myemail@gmail.com' && userPassword == 'abc1234') {
        window.location.href = 'banking.html';

    }
    else {
        console.log('please full fill action')
    }

});

