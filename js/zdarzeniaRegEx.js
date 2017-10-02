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


var regImie = /^[A-z]{2,16}$/;
var regNazwisko = /^[A-z]{2,25}(\-[A-z]{2,25})?$/
var regLogin = /^(\w|\W){4,20}$/
var regMail = /^(\w|\W){1,20}@(\w|\W){1,20}\.[A-z]{1,3}$/;
var regHaslo = / ^((?=.*\d)(?=.*[A-z])(?=.*[\W|_]).{8,20})$/;
function sprawdzImie(){
    //var element = document.getElementById(this.id);
    if(regImie.test(imie.value)){
     blok.textContent = ' ';
    }else {
     blok.textContent = 'Błędne imie';
    imie.focus();
    }
}

function sprawdzNazwisko(){
    //var element = document.getElementById(this.id);
    if(regNazwisko.test(nazwisko.value)){
     blok.textContent = ' ';
    }else {
     blok.textContent = 'Błędne Nazwisko';
    nazwisko.focus();
    }
}

function sprawdzLogin(){
    //var element = document.getElementById(this.id);
    if(regLogin.test(login.value)){
     blok.textContent = ' ';
    }else {
     blok.textContent = 'Błędny Login';
    login.focus();
    }
}

function blokuj (){
    var sprawdz = regMail.test(mail1.value);
    if(!sprawdz){
    blok.textContent = '';
    mail2.disabled = false;
    mail2.focus();
    this.setAttribute('disabled','');
} else {
    blok.textContent = "Błędny adres poczty";
    mail1.focus();
}
}
function email(){
    if(mail1.value == mail2.value){
        blok.textContent= ' ';
        mail1.disabled= true;
        mail2.disabled= true;
    }else {
        blok.textContent= 'Niezgodność mailuf';
        mail1.removeAttribute('disabled');
        mail1.focus();
        mail1.disabled = false;
        mail2.disabled = true;
        mail1.setAttribute('value','');
    }
}

function inne() {

}

function pass(){
    if(pass1.value == pass2.value){
        blok.textContent= ' ';
        pass1.disabled= true;
        pass2.disabled= true;
    }else {
        blok.textContent= 'Niezgodność mailuf';
        pass1.removeAttribute('disabled');
        pass1.focus();
        pass1.disabled = false;
        pass2.disabled = true;
        pass1.setAttribute('value','');
    }
}
function passBlokuj (){
    var sprawdz = regHaslo.test(pass1.value);
    if(sprawdz){
    pass2.disabled = false;
    pass2.focus();
    this.setAttribute('disabled','');
}else {blok.textContent = "hasło nie spełnia wymagań";
       pass1.focus();
}
}


function sprawdzRegulamin() {
    if(regulamin.checked){
        przycisk.disabled = false;
    }else{
        przycisk.disabled = true;
    }
}

function odblokuj(){
    var zablokowane = document.getElementsByTagName('input');
    if(zablokowane.length>0){
     //   console.log(zablokowane);
    }

    for (var i =0;i<zablokowane.length;i++){
        if(zablokowane[i].disabled == true)
            zablokowane[i].disabled = false;
    }
}

function wyslij() {
    var dokument = document.getElementsByTagName('fieldset')[0];
    if(ostateczne()==true){
    dokument.style.display = "none";
    document.write('Imię: ' + imie.value +'<br> Nazwisko: '+ nazwisko.value + '<br> Login: ' + login.value + '<br> Mail: '+ mail2.value + '<br> Data: '+ data.value)
} else {
    blok.innerHTML = "Zostawiłeś puste dane";
}
}
function ostateczne() {
    var wprowadz = wprowadz.getElementsByTagName('input')[0];
    for(var i = 0;i <= wprowadz.length;i++){
        if(wprowadz[i]=''){
            return false;
        }
    }
    return true;
}

imie.addEventListener('blur', sprawdzImie);
nazwisko.addEventListener('blur',sprawdzNazwisko);
login.addEventListener('blur', sprawdzLogin);
mail2.addEventListener('blur', email);
mail1.addEventListener('blur', blokuj);
pass2.addEventListener('blur',pass);
pass1.addEventListener('blur',passBlokuj)
regulamin.addEventListener('change', sprawdzRegulamin);
popraw.addEventListener('click', odblokuj);
przycisk.addEventListener('click', wyslij);

