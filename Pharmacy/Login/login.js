function validateForm(logForm){
      

    const name=document.getElementById("name").value;
   const password=document.getElementById("pass").value;

var mailformat = /^([a-zA-Z0-9])+$/;
var passw=  /^[A-Za-z]\w{7,14}$/;
   const name_error=document.getElementById("error_name")
   const password_error=document.getElementById("error_pass")

   if(name ==''){
     name_error.innerHTML=("**required")
   }
   else if(!name.match( mailformat)){
   name_error.innerHTML=('**Check your username')

   }
   else{
     name_error.innerHTML=("")
   }

  
   if(password==''){
     password_error.innerHTML=("**required")
   }
   else if(!password.match(passw)){
     password_error.innerHTML=("**Check password")
  }
  else if(name!="" && password!=""){
   
    document.write('<html><body><h1><center>')
    document.write("Welcome"+" ")
    document.write(name);
    document.write('</center></h1></body></html>');
    password_error(window.location="../index.html");
  }
  
}

    