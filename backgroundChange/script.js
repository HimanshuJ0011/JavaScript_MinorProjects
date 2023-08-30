let flag = true;
let array = ["black", "violet", "lightseagreen", "white"];

function change(c) {

    
    document.body.style.backgroundColor = c;
    document.getElementById(c).style.marginBottom = "25px";
    document.getElementById(c).style.transitionDuration = '0.8s';
    document.getElementById(c).style.width = "30px";
    document.getElementById(c).style.height = "30px";
    //document.getElementById(c).setAttribute( "style"," width : 30px; height:30px; marginBottom:25px;transitionDuration:0.8s");
    for (let i of array) {
        
        if (i != c) {
            document.getElementById(i).style.marginBottom = "0px";
            document.getElementById(i).style.transitionDuration = '0.8s';
            document.getElementById(i).style.width = "20px";
            document.getElementById(i).style.height = "20px";
         }
    }



    if (c == "black") {

        let color = document.getElementsByClassName("txt");
        console.log(color);
        color[0].style.color = "white";
        color[1].style.color = "white";
        document.getElementById('black').style.borderColor = 'white';
        document.getElementById('violet').style.borderColor = 'white';
        document.getElementById('lightseagreen').style.borderColor = 'white';
        document.getElementById('white').style.borderColor = 'white';

    }
    else {
        console.log(document.getElementsByClassName("txt"));
        document.getElementsByClassName("txt")[0].style.color='black';
        document.getElementsByClassName("txt")[1].style.color='black';
        document.getElementById('black').style.borderColor = 'black';
        document.getElementById('violet').style.borderColor = 'black';
        document.getElementById('lightseagreen').style.borderColor = 'black';
        document.getElementById('white').style.borderColor = 'black';

    }



}


window.addEventListener('scroll', function () {
    let navbar = document.getElementById('menu');
    let move=document.getElementsByClassName("moveup");
    if (window.pageYOffset >= 125) {
        console.log('yes i doing');
        navbar.classList.add('sticky');
        move[0].classList.add('appear');
        
        
       
    }
    else {
        navbar.classList.remove('sticky');
        move[0].classList.remove('appear');
    }
});
function about() {
    alert("we are the fuckers");
}

function move(){
    console.log("hy bussy")
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    //alternative
    // window.scrollTo({top: 0, behavior: 'smooth'});
    if(c >0){
        window.requestAnimationFrame(move);
        window.scrollTo(0, c - c / 30);

    }

  
} 