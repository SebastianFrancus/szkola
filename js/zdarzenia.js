var imie=document.getElementById('imie');
var nazwisko=document.getElementById('nazwisko');
var login=document.getElementById('login');
var mail1=document.getElementById('mail1');
var mail2=document.getElementById('mail2');
var pass1=document.getElementById('pass1');
var pass2=document.getElementById('pass2');
var data=document.getElementById('data');
var regulamin=document.getElementById('regulamin');
var popraw=document.getElementById('popraw');
var przycisk=document.getElementById('przycisk');
var blok=document.getElementById('blok');
blok.style.color = 'red';

//onload

/*window.onload = function() {
    alert('gowno')
}*/

/*imie.onblur = function() {
    if(imie.value.length > 2 && imie.value.length < 15){
        blok.textContent = ' '
    }else {
     blok.textContent = 'Błędne dane'
    }
}*/
/*
function sprawdz(){
    if(imie.value.length > 2 && imie.value.length < 15){
        blok.textContent = ' '
    }else {
     blok.textContent = 'Błędne dane'
    }
}*/

function sprawdz(){
    var element = document.getElementById(this.id)
    if(element.value.length > 2 && element.value.length < 15){
     blok.textContent = ' ';
    }else {
     blok.textContent = 'Błędne dane';
    element.focus();
    }
}

imie.addEventListener('blur', sprawdz);
nazwisko.addEventListener('blur', sprawdz);
login.addEventListener('blur', sprawdz);


function email(){
    if(mail1.value == mail2.value){
        blok.textContent= ' ';
    }else {
        blok.textContent= 'Niezgodność mailuf';
        mail1.removeAttribute('disabled');
        mail1.focus();
        mail1.setAttribute('value','');
    }
}

function blokuj (){
    var blokuj = document.getElementById(this.id);
    this.setAttribute('disabled','');
}

function inne() {

}
mail2.addEventListener('blur', email);
mail1.addEventListener('blur', blokuj);
