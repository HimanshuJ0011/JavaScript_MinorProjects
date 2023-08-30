console.log("hello")
let form = document.getElementById("form");
// console.log(form)
let username = document.getElementById("username");
let email=document.getElementById("email");
let mobile=document.getElementById("mobile");
let password=document.getElementById("password");
let cpassword =document.getElementById("cpassword");

form.addEventListener("submit",(event)=>{
    
    event.preventDefault();
    Validate();

})

const isEmail= (emailval)=>{

    
    let atsymbol=emailval[0];
    
    if(atsymbol==="@"){
        return false;
    }
    var dot= emailval[emailval.length -1];
    
    if(dot === "."){
        return false;
    }
    

    return true;
}
let sendData=(n,x,y)=>{
    
    if(x===y){
        setTimeout( () =>{document.getElementById("msg").innerHTML ="success";
        document.getElementById("msg").style.scale="2" ;
        document.getElementById("msg").classList="dots"}, 2000) 
        alert( 'WELCOME   ' + n +'   your registration is succesfull');
    }
}

let successMsg=(user)=>{
    
    let formCon=document.getElementsByClassName("form-control");
    
    let len = formCon.length;
   
    var count=0;
    for(let i=0 ;i<form.length;i++){
        
        if(formCon[i].className===" form-control success"){
            count++;
            sendData(user,count,len);
        }
        else return false;
    }
}

const Validate =()=>{



    

let usernameval = username.value.trim();

let emailval=email.value.trim();

let mobileval=mobile.value.trim();
let passwordval=password.value.trim();
let cpasswordval =cpassword.value.trim();


if(usernameval===""){
    setErrorMsg(username,"username cannot be blank");
}


else if( usernameval<= 2){
    setErrorMsg(username,"username minimun chac 3");
}
else{
    setSuccessMsg(username);
}

if(emailval===""){
    setErrorMsg(email,"email cannot be blank");
}

else if(! isEmail(emailval)    ){

    setErrorMsg(email,"email cannot start with @ / dot is not proper /");
}
else{
    setSuccessMsg(email);
}


if(mobileval.length !==10 || mobileval===""){setErrorMsg(mobile,"enter 10 digits number")}

else{

    setSuccessMsg(mobile);
}

if(passwordval===""){
    setErrorMsg(password,"password cannot be blank");
}else{

        setSuccessMsg(password);
}
if(cpasswordval===""){
    setErrorMsg(cpassword,"cpassword cannot be blank");
}else if(cpasswordval!==passwordval){
    setErrorMsg(cpassword," password dosent match");
}
else{
    setSuccessMsg(cpassword);
}


successMsg(usernameval);
   
}

function setErrorMsg(input , errormsg){
    const formControl=input.parentElement;
    let small= formControl.querySelector("small");
    small.innerText=errormsg;
    formControl.className=" form-control error";
}
function setSuccessMsg(input){
    const formControl=input.parentElement;
    formControl.className=" form-control success";

}

