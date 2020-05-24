function addRow(tableID) {

    var table = document.getElementById(tableID);

    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);
//check box for deletion
    var cell1 = row.insertCell(0);
    var element1 = document.createElement("input");
    element1.type = "checkbox";
    element1.name="chkbox[]";
    cell1.appendChild(element1);

    var cell2 = row.insertCell(1);
    cell2.innerHTML = rowCount + 1;

    var cell3 = row.insertCell(2);
    var element2 = document.createElement("input");
    element2.type = "text";
    element2.name = "txtbox[]";
    cell3.appendChild(element2);

    var cell4 = row.insertcell(3);
    var element3 = document.createElement("input");
    element3.type = "text1";
    element3.name = "txtbox[]1";
    cell4.appendChild(element3);

    var cell5 = row.insertcell(4);
    var element4 = document.createElement("input");
    element4.type = "text2";
    element4.name = "txtbox[]3";
    cell5.appendChild(element4);

    var cell6 = row.insertcell(5);
    var element5 = document.createElement("input");
    element5.type = "text3";
    element5.name = "txtbox[]3";
    cell6.appendChild(element5);

    var cell7 = row.insertcell(6);
    var element6 = document.createElement("input");
    element6.type = "text4";
    element6.name = "txtbox[]4";
    cell7.appendChild(element6);




}

function deleteRow(tableID) {
    try {
    var table = document.getElementById(tableID);
    var rowCount = table.rows.length;

    for(var i=0; i<rowCount; i++) {
        var row = table.rows[i];
        var chkbox = row.cells[0].childNodes[0];
        if(null != chkbox && true == chkbox.checked) {
            table.deleteRow(i);
            rowCount--;
            i--;
        }


    }
    }catch(e) {
        alert(e);
    }
}
    