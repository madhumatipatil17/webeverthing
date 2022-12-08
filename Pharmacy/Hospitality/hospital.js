// window.onload=function(no){
    
//  document.getElementById("save_button1").style.display="none";
//  document.getElementById("save_button2").style.display="none";
//  document.getElementById("save_button3").style.display="none";
//  document.getElementById("save_button4").style.display="none";
//  document.getElementById("save_button5").style.display="none";
//  saveHide(no);

// }

// function saveHide(no){
//  document.getElementById("save_button"+no).style.display="none";

// }



// function edit_row(no)
// {
//  document.getElementById("edit_button"+no).style.display="none";
//  document.getElementById("save_button"+no).style.display="inline";
	
//  var name=document.getElementById("name_row"+no);
//  var country=document.getElementById("country_row"+no);
//  var age=document.getElementById("age_row"+no);
	
//  var name_data=name.innerHTML;
//  var country_data=country.innerHTML;
//  var age_data=age.innerHTML;
	
//  name.innerHTML="<input type='text' id='name_text"+no+"' value='"+name_data+"'>";
//  country.innerHTML="<input type='text' id='country_text"+no+"' value='"+country_data+"'>";
//  age.innerHTML="<input type='text' id='age_text"+no+"' value='"+age_data+"'>";
// }

// function save_row(no)
// {
//  var name_val=document.getElementById("name_text"+no).value;
//  var country_val=document.getElementById("country_text"+no).value;
//  var age_val=document.getElementById("age_text"+no).value;

//  document.getElementById("name_row"+no).innerHTML=name_val;
//  document.getElementById("country_row"+no).innerHTML=country_val;
//  document.getElementById("age_row"+no).innerHTML=age_val;

//  document.getElementById("edit_button"+no).style.display="inline";
//  document.getElementById("save_button"+no).style.display="none";
// }

// function delete_row(no)
// {
//  document.getElementById("row"+no+"").outerHTML="";
// }

// function add_row()
// {
//  var new_name=document.getElementById("new_name").value;
//  var new_country=document.getElementById("new_country").value;
//  var new_age=document.getElementById("new_age").value;
	
//  var table=document.getElementById("data_table");
//  var table_len=(table.rows.length)-1;
//  var row = table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"' ><td id='name_row"+table_len+"'>"+new_name+"</td><td id='country_row"+table_len+"'>"+new_country+"</td><td id='age_row"+table_len+"'>"+new_age+"</td><td><input class=' btn btn-light' type='button' id='edit_button"+table_len+"' value='Edit' class='edit' onclick='edit_row("+table_len+")'><input class=' btn btn-light' type='button' id='save_button"+table_len+"' value='Save' class='save' onclick='save_row("+table_len+")'><input class=' btn btn-light' type='button' value='Delete' class='delete' onclick='delete_row("+table_len+")'></td></tr>";

//  document.getElementById("new_name").value="";
//  document.getElementById("new_country").value="";
//  document.getElementById("new_age").value="";
// }


// fetch("Doctor.json")
// .then(function(response){
// 	return response.json();
// })
// .then(function(Doctor){
// 	let placeholder = document.querySelector("#data-output");
// 	let out = "";
// 	for(let Doctors of Doctor){
// 		out += `
// 			<tr>
				
// 				<td>${Doctors.name}</td>
// 				<td>${Doctors.department}</td>
// 				<td>${Doctors.hospital}</td>
// 			</tr>
// 		`;
// 	}

// 	placeholder.innerHTML = out;
// });
var dataSet = [
    ['KRISHNA KUMAR.K.', 'Cardiology & Interventional Cardiology', 'PRS Hospital'],
    ['R.ANANDAM', 'Neurology', 'PRS Hospital'],
    ['E. GOPAKUMAR', 'Podiatric Surgery & Preventive Podiatry', 'KIMS Hospital'],
    ['RENNY ALEXANDER', 'Anaesthesia', 'Jawahar Hospital'],
    ['NAFINA JASMINE', 'Dermatology', 'Anantha Hospital'],
    ['SOORAJ S NAIR', 'Dermatology', 'Guna Hospital'],
    ['AROMAL CHEKAVAR S', 'Department of Endocrinology & Endocrine Surgery', 'MIOT Hospital'],
    ['Seelan U', 'Cardiology & Interventional Cardiology', 'RJ Hospital'],
    ['SANTHOSH.K.R', 'Cardio Thoracic', 'KG Hospital'],
    ['AZEEM FAZIL MOHAMMED', 'Clinical Nutrition & Therapeuticsc', 'KMCH Hospital'],
    ['MINI MARY PRAKASH', 'Clinical Nutrition & Therapeuticsc', 'KMCH Hospital'],
    ['RAKESH S', '>Medical and Surgical Gastroenterology', 'PSG Hospital'],
    ['JANAK GIRIDHAR', 'Neurology', 'KIMS Hospital'],
    ['KARTHIK RAJ', 'Neonatology', 'PSG Hospital'],
    ['SINDHU.M.S.', 'Obstetrics & Gynaecology', 'PRS Hospital'],
    ['PRAVEEN S JOSE', 'Orthopaedics', 'Jawahar Hospital'],
    ['VISHNU UNNITHAN', 'Orthopaedics', 'Anantha Hospital'],
    ['GOPAKUMAR. P', 'Paediatrics', 'KG Hospital'],
    ['MEENU MURALI', 'Paediatrics', 'KG Hospital'],
    ['VARUN SABARI', 'Paediatric Surgery', 'MIOT Hospital'],
    ['ARJUN S', 'Physical Medicine & Rehabilitation & Sports Medicine', 'KMCH Hospital'],
    ['VISHNU UNNITHAN', 'Physical Medicine & Rehabilitation & Sports Medicine', 'PRS Hospital'],
    ['JOSEMON THOMAS', 'General Medicine', 'KG Hospital'],
    ['DEEPU.A', 'General Medicine', 'KMCH Hospital'],
    ['EJAS. S', 'General Medicine', 'Jawahar Hospital'],
 


    
];
$(document).ready(function () {
    $('#sortTable').DataTable({
        data: dataSet,
        columns: [
            { title: 'Doctor Name' },
            { title: 'Department' },
            { title: 'Hospital' },
        ],
    });
});