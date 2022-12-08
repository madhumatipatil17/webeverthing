//JQuery
 

$(document).ready(function () {
    var fnameva =false;
    var ema=false;
    var passv=false;
    // first name validation
    $('#fnameErr').hide();

    $('#fname').keyup(function () {
        validateFname();
    });
    function validateFname() {
        let fname = $('#fname').val();
      
       if (fname.length < 5) {
        fnameva =false;
            $('#fnameErr').show();
            $('#fnameErr').html
                ("**length of First name must be more than 5");

        }
        else {
            $('#fnameErr').hide();
            fnameva =true;

        }

       

    }



 //Validate Email
 const email =
 document.getElementById('email');
email.addEventListener('blur', ()=>{
let regex =
/[a-z0-9-.]+@(?=.*htcindia)([a-z])+\.[a-z]{2,3}$/;
let s = email.value;

if(regex.test(s)){
   
    ema=true;
    
 document.getElementById('emailvalid').innerHTML=""
 }
 else{
    ema=false;
    
    document.getElementById('emailvalid').innerHTML="**Enter valid email"
 }
})


 //Validate password
 const passw =
 document.getElementById('pass');
passw.addEventListener('blur', ()=>{
let regex =
/^([a-zA-Z0-9])+$/;
let s = passw.value;

if(regex.test(s)){
    passv=true;
 
 document.getElementById('passvalid').innerHTML=""
 }
 else{
    passv=false;
    document.getElementById('passvalid').innerHTML="**Enter valid password"
 }
})



$('#pass').keyup(function () {
    checkAllField(fnameva,ema,passv);
});

function checkAllField( fnameva ,ema, passv) {
     
    if(fnameva===true  && ema===true && passv===true){
        $("#subButton").attr('disabled', false);
        
    }
}



});


// function validateForm(logForm){
      

//     const name=document.getElementById("fname").value;
//     const mail=document.getElementById("email")
//    const password=document.getElementById("pass").value;
// // 
// var nameFormat = /^([a-zA-Z0-9])+$/;
// var passw=  /^[A-Za-z]\w{7,14}$/;
//    const fnameErr=document.getElementById("error_name")
//    const
//    const password_error=document.getElementById("error_pass")

//    if(name ==''){
//      name_error.innerHTML=("**required")
//    }
//    else if(!name.match( mailformat)){
//    name_error.innerHTML=('**Check your username')

//    }
//    else{
//      name_error.innerHTML=("")
//    }

  
//    if(password==''){
//      password_error.innerHTML=("**required")
//    }
//    else if(!password.match(passw)){
//      password_error.innerHTML=("**Check password")
//   }
//   else if(name!="" && password!=""){
   
//     document.write('<html><body><h1><center>')
//     document.write("Welcome"+" ")
//     document.write(name);
//     document.write('</center></h1></body></html>');
//     password_error(window.location="../index.html");
//   }
  
// }

    