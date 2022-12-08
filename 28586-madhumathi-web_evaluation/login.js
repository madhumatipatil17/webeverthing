
const myProfile = () => {
    console.log("hi")
    const title = document.getElementById("title").innerHTML = "My_Profile";

    const HomePage = document.getElementById("blure")
    HomePage.style.display = 'none'

    //geting email value 

    const email = document.getElementById("email").value


    //put the email on the profile

    const putEmail = document.getElementById("teacher-mail")
    putEmail.innerHTML = email

    var getName = email.split("@")
    console.log(getName[0].toLocaleUpperCase())


    // get element to display name 

    const putName = document.getElementById("user-name")
    putName.innerHTML = `${getName[0].toLocaleUpperCase()}`


    //display the myprofile screen

    const myProfile = document.getElementById("profile")
    myProfile.style.display = " block"


    const  attendence = document.getElementById("parent-attendence")
    attendence.style.display = "none"



    const submission = document.getElementById("table-data")
    submission.style.display = "none"



}