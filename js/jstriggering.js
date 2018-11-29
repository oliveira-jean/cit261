//JS Code for Slideout Menu
function toggleNav() {
    var updateElement = document.getElementById("getmenu");
    var updateSidebar = document.getElementById("sidebar");
    //toggle adds a class if it's not there or removes if it is.
    updateElement.classList.toggle("open");
    updateSidebar.classList.toggle("openbar");
}


//cloud
startbtn.addEventListener("click", function(){
	cloud.style.animation = "cloudrun 2s steps(100) infinite";
	cloud.style.webkitAnimation = "cloudrun 2s steps(100) infinite";
});
stopbtn.addEventListener("click", function(){
	cloud.style.animation = "";
	cloud.style.webkitAnimation = "";
});