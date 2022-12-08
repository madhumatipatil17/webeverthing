function login()
{
    var uname = document.getElementById("email").value;
    var pwd = document.getElementById("pwd1").value;
    var pwd2 = document.getElementById("pwd2").value;
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    


     if(uname =='')
    {
        alert("please enter email id.");
    }
    
    else if(pwd=='')
    {
        alert("enter the password");
    }
    else if(!filter.test(uname))
    {
        document.getElementById('emailErr').innerHTML="Please enter valid email";
    }
    else if(pwd.length < 4)
    {
        alert("Password min length is 4.");
    }
    else if(pwd.length > 15)
    {
        alert("Password max length is 15.");
    }
    else if(pwd!=pwd2)
    {
        alert("Password does not match");
    }
    else
    {
//Redirecting to other page.
   window.location = "employee.html";
        }
}	



