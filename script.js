let myname = document.getElementById('myname');
let email = document.getElementById('myemail');
let active = document.getElementById('activation');
let cb = document.getElementById('accept');
let form = document.querySelector('.container2')

form.addEventListener('submit', validate);

function validate(e){
    e.preventDefault();
    if(myname.value == ""){
       document.getElementById('screen').innerText = 'NAME MUST NOT BE EMPTY!!!';
       return;
    } 
    if(email.value == ""){
        document.getElementById('screen').innerText = 'EMAIL MUST NOT BE EMPTY!!!';
        return;
    } 
    if(active.value == ""){
       document.getElementById('screen').innerText = 'ACTIVATION TOKEN NOT BE EMPTY!!!';
       return;
    }   
    if(cb.checked == false){
        document.getElementById('screen').innerText = 'PLEASE TICK THE PRIVACY CHECK!!!';
        return;
    }
}