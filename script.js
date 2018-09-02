var button = document.getElementById("mynavbuttonid");
var sidemenu = document.getElementById("mysidemenuid");
button.addEventListener("click", function () {
    sidemenu.style.width = "110px";
})
button.addEventListener("mousemove", function () {
    var bars = document.querySelectorAll(".bar1");
    bars.forEach(bar => {
        bar.style.width = "30px";
        bar.style.backgroundColor = "red";
    });
})

button.addEventListener("mouseleave", function () {
    var bars = document.querySelectorAll(".bar1");
    bars.forEach(bar => {
        bar.style.width = "10px";        
        bar.style.backgroundColor = "black";
    });
})

var menuitem = document.querySelector("#mysidemenuid a");
menuitem.addEventListener("click", function () {
    sidemenu.style.width = "0px";
})