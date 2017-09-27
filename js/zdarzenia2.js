var auto = document.getElementById('auto');
var ulubioneAuto = document.getElementById("ulubioneAuto");

function mojeAuto(){
    var ulubione = auto.value;
    ulubioneAuto.textContent = 'Twoje ulubione auto: ' + ulubione;
}

auto.onchange = mojeAuto;


Zad.dom
Użytkownik z klawiatury wpisuje w formularzu swoje hasło w dwóch polach wykorzystaj zdarzenie onchange, które będzie w bloku wyświetlało czy hasła sątakie same i mają minimum 5 znaków a maksymalnie 12 znaków
