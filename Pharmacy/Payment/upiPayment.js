
let uname = false;
let upinumber = false;
let cnumber = false;



function validateName() {
    var name = document.getElementById("personname").value;
    let pattern = /^[a-zA-Z\D]{5,50}$/;

    if (name.match(pattern)) {
        // document.getElementById('fname').style.border = "3px solid green";
        document.getElementById('nameErr').innerHTML = "";
        uname = true;
    }
    else {
        // document.getElementById('fname').style.border = "3px solid red";
        document.getElementById('nameErr').innerHTML = "Enter Alphabet only and minimum length is 3 ";
        uname = false;
    }



}

function validateUpi() {
    var no = document.getElementById("upiid").value;
    let pattern = /[a-z0-9-.]+@([a-zA-Z]{5,50})$/;

    if (no.match(pattern)) {
        // document.getElementById('fname').style.border = "3px solid green";
        document.getElementById('upiErr').innerHTML = "";
        upinumber = true;
    }
    else {
        // document.getElementById('fname').style.border = "3px solid red";
        document.getElementById('upiErr').innerHTML = "Enter valid card details";
        upinumber = false;
    }



}


function validatePhone() {
    var no = document.getElementById("phoneno").value;
    let pattern = /^[0-9]{10}$/;

    if (no.match(pattern)) {
        // document.getElementById('fname').style.border = "3px solid green";
        document.getElementById('phonenoErr').innerHTML = "";
        cnumber = true;
    }
    else {
        // document.getElementById('fname').style.border = "3px solid red";
        document.getElementById('phonenoErr').innerHTML = "Enter valid Mobile Details";
        cnumber = false;
    }



}





function validate1() {
    alert("Initiated Payment Request to Your Registered Mobile Number.... ")
}
