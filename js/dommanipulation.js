var tbody1 = document.getElementById("Nation1");
var tbody2 = document.getElementById("Nation2");

document.getElementById("addit").onclick = function () {
    var row = tbody1.appendChild(document.createElement("tr"));
    row.setAttribute("id", "rownew");
    row.appendChild(document.createElement("td"))
        .appendChild(document.createTextNode("France"));
    row.appendChild(document.createElement("td"))
        .appendChild(document.createTextNode("Paris"));
};

document.getElementById("removeit").onclick = function () {
    var row = document.getElementById("rownew");
    row.parentNode.removeChild(row);
};

document.getElementById("addBefore").onclick = function () {
    //new table row
    var trow = tbody2.appendChild(document.createElement("tr"));
    //new table data = "France"
    var cell1 = trow.appendChild(document.createElement("td"))
        .appendChild(document.createTextNode('France'));
    //new table data = "Paris"
    var cell2 = trow.appendChild(document.createElement("td"))
        .appendChild(document.createTextNode('Paris'));
    //console.log(cell1);
    //console.log(cell2);
    //console.log(trow);
    // Insert the new row node before the reference node tbody2.childNodes[0]
    tbody2.insertBefore(trow, tbody2.childNodes[0]);
};

document.getElementById("removeBefore").onclick = function () {
    var del = document.getElementById("Nation2").firstChild;
    del.parentNode.removeChild(del);
};

