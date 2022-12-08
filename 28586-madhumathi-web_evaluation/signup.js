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
    console.log(ema)
 document.getElementById('emailvalid').innerHTML=""
 }
 else{
    ema=false;
    console.log(ema)
    document.getElementById('emailvalid').innerHTML="Enter valid email"
 }
})


 //Validate Email
 const passw =
 document.getElementById('pass');
passw.addEventListener('blur', ()=>{
let regex =
/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{10,}$/;
let s = passw.value;

if(regex.test(s)){
    passv=true;
 console.log(passv);
 document.getElementById('passvalid').innerHTML=""
 }
 else{
    passv=false;
    document.getElementById('passvalid').innerHTML="Enter valid password"
 }
})

console.log(ema)

$('#pass').keyup(function () {
    checkvalidate(fnameva,ema,passv);
});

function checkvalidate( fnameva ,ema, passv) {
     console.log(fnameva,ema,passv);
    if(fnameva===true  && ema===true && passv===true){
        $("#subButton").attr('disabled', false);
        // console.log(fnameva,ema,passv)
    }
}



});