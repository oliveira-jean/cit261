function setStyle() {
    var property = document.getElementById("cssproperty").value;
    var value = document.getElementById("cssvalue").value;
    if (property.length > 0) {
        document.getElementById("csstext").style[property] = value;
    } else {
        alert("Value is Required!");
    }
}

//JS Code for Slideout Menu
function toggleNav() {
    var updateElement = document.getElementById("getmenu");
    var updateSidebar = document.getElementById("sidebar");
    //toggle adds a class if it's not there or removes if it is.
    updateElement.classList.toggle("open");
    updateSidebar.classList.toggle("openbar");
}