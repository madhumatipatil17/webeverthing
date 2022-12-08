function validateForm(){

    const fname=document.getElementById("fname").value;
    const lname=document.getElementById("lname").value; 
    const mail=document.getElementById("mail").value;
   const password=document.getElementById("pass").value;
   const cpassword=document.getElementById("cpass").value;
   const check = document.getElementById("checkTick").value;
// console.log(name,password)
var mailformat = /[a-z0-9-.]+@([gmail]{5})+.[a-z]{2,3}$/;
var passw=  /^[A-Za-z]\w{7,14}$/;
var user= /^([a-zA-Z0-9])+$/;
   const fname_error=document.getElementById("error_fname")
   const lname_error=document.getElementById("error_lname")
   const mail_error=document.getElementById("error_mail")
   const password_error=document.getElementById("error_pass")
   const cpassword_error=document.getElementById("error_cpass")
   const date_error=document.getElementById("error_date")



   if(fname ==''){
     fname_error.innerHTML=("**required")
   }
   else if(!fname.match(user)){
   fname_error.innerHTML=('**Enter your FirstName')

   }
   else{
     fname_error.innerHTML=("")
   }

//    latsname
   if(lname ==''){
     lname_error.innerHTML=("**required")
   }
   else if(!lname.match(user)){
   lname_error.innerHTML=('**Enter your Last Name')

   }
   else{
     lname_error.innerHTML=("")
   }
//    email
   if(mail ==''){
     mail_error.innerHTML=("**required")
   }
   else if(!mail.match(mailformat)){
   mail_error.innerHTML=('**Enter your valid Email')

   }
   else{
     mail_error.innerHTML=("")
   }
//    password
   if(password ==''){
     password_error.innerHTML=("**required")
   }
   else if(!password.match(passw)){
   password_error.innerHTML=('**Enter your valid Email')

   }
   else{
     password_error.innerHTML=("")
   }


if(password==''){
     password_error.innerHTML=("**required")
   }
   else if(!password.match(passw)){
     password_error.innerHTML=("**Check password")
  }
  else if(name!="" && password!=""){
    password_error(window.location="home1.html");
  }
//   confirm password
  if(cpassword != password){
     cpassword_error.innerHTML=("**Not Matcing")
   }
   else if(!password.match(passw)){
     cpassword_error.innerHTML=("**required")
  }
  else{
     cpassword_error.innerHTML=("")
   }
      let d=document.getElementById('t-date').value;

      let today = new Date().toISOString().slice(0, 10)

if(d==''){
     date_error.innerHTML=("**required")
}
else if(d!==today){
   date_error.innerHTML=("**Incorrect date")
  }
  else{
    date_error(window.location="home1.html");
  }
      }
