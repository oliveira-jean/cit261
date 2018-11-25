//JS code  manipulating CSS class property
function setStyle() {
    var property = document.getElementById("cssproperty").value;
    var value = document.getElementById("cssvalue").value;
    if (property.length > 0) {
        document.getElementById("csstext").style[property] = value;
    } else {
        alert("Value is Required!");
    }
}