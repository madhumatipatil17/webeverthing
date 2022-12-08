
$(document).ready(function () {
	
    const email =
    document.getElementById('email');
email.addEventListener('blur', ()=>{
let regex =
/^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
let s = email.value;
if(regex.test(s)){
    email.classList.remove('is-invalid');
    emailError = true;
    }
    else{
        email.classList.add( 'is-invalid');
        emailError = false;
    }
});

$('#passcheck').hide();
let passwordError = true;
$('#password').keyup(function () {
    validatePassword();
});
function validatePassword() {
    let passwordValue = $('#password').val();
    if (passwordValue.length == '') {
        $('#passcheck').show();
        passwordError = false;
        return false;
      }
    if ((passwordValue.length < 8)||
        (passwordValue.length > 12)) {
        $('#passcheck').show();
        $('#passcheck').html ("password must be at least 8 characters");
        $('#passcheck').css("color", "red");
        passwordError = false;
        return false;
    } else {
        $('#passcheck').hide();
    }
}
    

$('#submitbtn').click(function () {
    validateEmail();
    validatePassword();
    
    if ((usernameError == true) &&
        (passwordError == true) &&
        (confirmPasswordError == true) &&
        (emailError == true)) {
        return true;
        
    } else {
        return false;
    }
});
});
