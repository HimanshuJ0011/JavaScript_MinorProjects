
let closemenu = document.getElementById("closemenu");
let item = document.getElementById("link");
let menubutton = document.getElementById("menubutton");

function clickMenu() {

    console.log(item);

    menubutton.style.visibility = "hidden";
    closemenu.style.visibility = "visible";
    item.style.visibility = "visible";
    item.style.animation = "fadeout 2s linear";



    console.log("done");


}
function closeMenu() {


    item.style.animation = "none";
    item.style.visibility = "hidden";
    menubutton.style.visibility = "visible";
    closemenu.style.visibility = "hidden";
    console.log("un-done");

}