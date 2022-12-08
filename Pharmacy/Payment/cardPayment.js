let uname = false;
let cnumber = false;
let exp = false;
let cv = false;




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

function validateNumber() {
    var no = document.getElementById("cardnumber").value;
    let pattern = /^[0-9]{16}$/;

    if (no.match(pattern)) {
        // document.getElementById('fname').style.border = "3px solid green";
        document.getElementById('numberErr').innerHTML = "";
        cnumber = true;
    }
    else {
        // document.getElementById('fname').style.border = "3px solid red";
        document.getElementById('numberErr').innerHTML = "Enter valid card details";
        cnumber = false;
    }



}

// function validateExpiry() {
//     var my = document.getElementById("My").value;
//     let today = new Date().toISOString().slice(0, 10);
//     if (my < today) {
//         document.getElementById('expiryErr').innerHTML = "Enter valid expiry date";

//     }


// }

function validateExp() {
    var exMonth = document.getElementById("exMonth").value;
    var exYear = document.getElementById("exYear").value;
    var date = new Date();
    var month = date.getMonth();
    var year = date.getFullYear();
    if (exMonth.selectedIndex === 0) {
        document.getElementById('expiryErr').innerHTML = "Please select the month";
        exp = false;

    }
    if (exYear.selectedIndex === 0) {
        document.getElementById('expiry1Err').innerHTML = "Please select the year";
        exp = false;

    }
    if ((exYear < year) || (year === exYear && exMonth < month)) {
        document.getElementById('expiry2Err').innerHTML = "The expiry date is before today's date. Please select a valid expiry date";
        exp = false;

    }
    else {
        document.getElementById('expiry2Err').innerHTML = "";
        exp = true;
    }
}

function validateCvv() {

    var cvv = document.getElementById("CVV").value;
    let pattern = /^[0-9]{3}$/;

    if (cvv.match(pattern)) {
        // document.getElementById('fname').style.border = "3px solid green";
        document.getElementById('cvvErr').innerHTML = "";
        cv = true;
    }
    else {
        // document.getElementById('fname').style.border = "3px solid red";
        document.getElementById('cvvErr').innerHTML = "Enter valid cvv";
        cv = false;
    }

}





function validate1() {
    alert("Initiated Payment Request to Your Registered Mobile Number.... ")
}