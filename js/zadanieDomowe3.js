/*Zad.dom
Użytkownik z klawiatury wpisuje w formularzu swoje hasło w dwóch polach wykorzystaj zdarzenie onchange, które będzie w bloku wyświetlało czy hasła sątakie same i mają minimum 5 znaków a maksymalnie 12 znaków */

var elPass1 = document.getElementById("pass1");
var elPass2 = document.getElementById("pass2");
var elZatw = document.getElementById("zatw");
function sprawdz() {
    if(elPass2.value != elPass1.value){
        blok.innerHTML = "podałeś różne hasła";
    } else if(elPass2.value.length > 4 && elPass2.value.length < 13 ){
        blok.innerHTML = "Wszystko jest git";
    }else {
        blok.innerHTML = "za mało znaków";
    }
    }
elPass1.addEventListener('change', sprawdz);
elPass2.addEventListener('change', sprawdz);
