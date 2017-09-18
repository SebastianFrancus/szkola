// ZIMA 2015 E14
var liczba1 = document.getElementById("pierwsza");
var liczba2 = document.getElementById("druga");

var elDodawanie = document.getElementById("dodawanie");
var elOdejmowanie = document.getElementById("odejmowanie");
var elMnozenie = document.getElementById("mnozenie");
var elDzielenie = document.getElementById("dzielenie");
var elWynik = document.getElementById("wynik");

function check(){
    if(liczba1.value == "" || liczba2.value == ""){
       elWynik.innerHTML = "Uzupełnij pola";
        return false;
    }
    else {
        return true;
    }
}

elDodawanie.onclick= function(){
    if(check()){
    elWynik.innerHTML = Number(liczba1.value) + Number(liczba2.value);
}
}

elOdejmowanie.onclick= function(){
    if(check()){

    elWynik.innerHTML = Number(liczba1.value) - Number(liczba2.value);
}
}

elMnozenie.onclick= function(){
    if(check()){
    elWynik.innerHTML = Number(liczba1.value) * Number(liczba2.value);
}
}
elDzielenie.onclick= function(){
    if(check()){
        if(Number(liczba2.value) == 0){
            elWynik.innerHTML = "nie wolno dzielic przez zero"
        }else{
    elWynik.innerHTML = Number(liczba1.value) / Number(liczba2.value);
}
}
}

var elPodstawa = document.getElementById("podstawa");
var elWykladnik = document.getElementById("wykladnik");
var elPoteguj = document.getElementById("potegowanie");
var elWynik2 = document.getElementById("wynik2");

elPoteguj.onclick = function(){
    if(elPodstawa.value == '' || elWykladnik.value == ''){
        elWynik2.innerHTML = "Wpisz podstawe i wykladnik"
    }else{

    }
}















