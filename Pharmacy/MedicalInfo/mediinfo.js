window.onload = function (no) {

    document.getElementById("save_button1").style.display = "none";
    document.getElementById("save_button2").style.display = "none";
    document.getElementById("save_button3").style.display = "none";
    document.getElementById("save_button4").style.display = "none";
    document.getElementById("save_button5").style.display = "none";
    document.getElementById("save_button6").style.display = "none";
    document.getElementById("save_button7").style.display = "none";
    document.getElementById("save_button8").style.display = "none";
    document.getElementById("save_button9").style.display = "none";
    document.getElementById("save_button10").style.display = "none";
    //  saveHide(no);

}

// function saveHide(no){
//  document.getElementById("save_button"+no).style.display="none";

// }



function edit_row(no) {
    document.getElementById("edit_button" + no).style.display = "none";
    document.getElementById("save_button" + no).style.display = "inline";

    var mediId = document.getElementById("mediId_row" + no);
    var mediName = document.getElementById("mediName_row" + no);
    var mediCure = document.getElementById("mediCure_row" + no);

    var mediId_data = mediId.innerHTML;
    var mediName_data = mediName.innerHTML;
    var mediCure_data = mediCure.innerHTML;

    mediId.innerHTML = "<input type='text' id='mediId_text" + no + "' value='" + mediId_data + "'>";
    mediName.innerHTML = "<input type='text' id='mediName_text" + no + "' value='" + mediName_data + "'>";
    mediCure.innerHTML = "<input type='text' id='mediCure_text" + no + "' value='" + mediCure_data + "'>";
}

function save_row(no) {
    var mediId_val = document.getElementById("mediId_text" + no).value;
    var mediName_val = document.getElementById("mediName_text" + no).value;
    var mediCure_val = document.getElementById("mediCure_text" + no).value;

    document.getElementById("mediId_row" + no).innerHTML = mediId_val;
    document.getElementById("mediName_row" + no).innerHTML = mediName_val;
    document.getElementById("mediCure_row" + no).innerHTML = mediCure_val;

    document.getElementById("edit_button" + no).style.display = "inline";
    document.getElementById("save_button" + no).style.display = "none";
}

function delete_row(no) {
    document.getElementById("row" + no + "").outerHTML = "";
}

function add_row() {
    var new_mediId = document.getElementById("new_mediId").value;
    var new_mediName = document.getElementById("new_mediName").value;
    var new_mediCure = document.getElementById("new_mediCure").value;

    var table = document.getElementById("data_table");
    var table_len = (table.rows.length) - 1;
    var row = table.insertRow(table_len).outerHTML = "<tr id='row" + table_len + "' ><td id='mediId_row" + table_len + "'>" + new_mediId + "</td><td id='mediName_row" + table_len + "'>" + new_mediName + "</td><td id='mediCure_row" + table_len + "'>" + new_mediCure + "</td><td><input class=' btn btn-light' type='button' id='edit_button" + table_len + "' value='Edit' class='edit' onclick='edit_row(" + table_len + ")'><input class=' btn btn-light' type='button' id='save_button" + table_len + "' value='Save' class='save' onclick='save_row(" + table_len + ")'><input class=' btn btn-light' type='button' value='Delete' class='delete' onclick='delete_row(" + table_len + ")'></td></tr>";

    document.getElementById("new_mediId").value = "";
    document.getElementById("new_mediName").value = "";
    document.getElementById("new_mediCure").value = "";

}
function searchId() {

    var input, filter, table, tr, td, i, txtValue;

    input = document.getElementById("myInput1");

    filter = input.value.toUpperCase();

    table = document.getElementById("data_table");

    tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {

        td = tr[i].getElementsByTagName("td")[0];

        if (td) {

            txtValue = td.textContent || td.innerText;

            if (txtValue.toUpperCase().indexOf(filter) > -1) {

                tr[i].style.display = "";

            } else {

                tr[i].style.display = "none";

            }

        }

    }

}

function searchMedicine() {

    var input, filter, table, tr, td, i, txtValue;

    input = document.getElementById("myInput");

    filter = input.value.toUpperCase();

    table = document.getElementById("data_table");

    tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {

        td = tr[i].getElementsByTagName("td")[1];

        if (td) {

            txtValue = td.textContent || td.innerText;

            if (txtValue.toUpperCase().indexOf(filter) > -1) {

                tr[i].style.display = "";

            } else {

                tr[i].style.display = "none";

            }

        }

    }

}
function searchRemedy() {

    var input, filter, table, tr, td, i, txtValue;

    input = document.getElementById("myInput3");

    filter = input.value.toUpperCase();

    table = document.getElementById("data_table");

    tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {

        td = tr[i].getElementsByTagName("td")[2];

        if (td) {

            txtValue = td.textContent || td.innerText;

            if (txtValue.toUpperCase().indexOf(filter) > -1) {

                tr[i].style.display = "";

            } else {

                tr[i].style.display = "none";

            }

        }

    }

}
cPrev = -1; // global var saves the previous c, used to
// determine if the same column is clicked again

function sortBy(c) {
    rows = document.getElementById("data_table").rows.length; // num of rows
    columns = document.getElementById("data_table").rows[0].cells.length; // num of columns
    arrTable = [...Array(rows)].map(e => Array(columns)); // create an empty 2d array

    for (ro = 0; ro < rows; ro++) { // cycle through rows
        for (co = 0; co < columns; co++) { // cycle through columns
            // assign the value in each row-column to a 2d array by row-column
            arrTable[ro][co] = document.getElementById("data_table").rows[ro].cells[co].innerHTML;
        }
    }

    th = arrTable.shift(); // remove the header row from the array, and save it

    if (c !== cPrev) { // different column is clicked, so sort by the new column
        arrTable.sort(
            function (a, b) {
                if (a[c] === b[c]) {
                    return 0;
                } else {
                    return (a[c] < b[c]) ? -1 : 1;
                }
            }
        );
    } else { // if the same column is clicked then reverse the array
        arrTable.reverse();
    }

    cPrev = c; // save in previous c

    arrTable.unshift(th); // put the header back in to the array

    // cycle through rows-columns placing values from the array back into the html table
    for (ro = 0; ro < rows; ro++) {
        for (co = 0; co < columns; co++) {
            document.getElementById("data_table").rows[ro].cells[co].innerHTML = arrTable[ro][co];
        }
    }
}

