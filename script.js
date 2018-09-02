var button = document.getElementById("mynavbuttonid");
var sidemenu = document.getElementById("mysidemenuid");
button.addEventListener("click", function () {
    sidemenu.style.width = "110px";
})

var menuitem = document.querySelector("#mysidemenuid a");
menuitem.addEventListener("click", function () {
    sidemenu.style.width = "0px";
})