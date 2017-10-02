var tekst = ".pl"
//var regEx = /Szkół/;
//var regEx = /szkół/i; // nie zwraca uwagi na wielkosc liter
//var regEx = /^Szkół/; // ma byc na poczatku wyrazenia "Szkół"
//var regEx = /Szkół$/; // sprawdza czy jest na końcu "Szkół"
//var regEx = /^Szkół$/; // sprawdza czy jest na końcu "Szkół" i na poczatku
//var regEx = /[a-z]/; // sprawdza z przedziału a-z
//var regEx = /[A-Z]/; // sprawdza z przedziału A-Z
//var regEx = /[A-z]/; // obojetnie czy duza czy małą
//var regEx = /[ą][A-z]/; //
//var regEx = /[ą]|[A-z]/; //jeden lub drugi przedział
//var regEx = /[A-z]\s/; // jakies znaki pozniej spacja
//var regEx = /[A-z]\S/; // nie może być spacji - negacja \s
//var regEx = /[A-z]\+@/; // musi byc jakis znak plus @
//var regEx = /[A-z]\?@/; // nie musi byc  znaku (moze byc sama @)
//var regEx = /mąk[a]?@/; // moze byc tylko jedno a
//var regEx = /mąk[a]*@/; // moze byc wiele znakow lub 0 "a"
//var regEx = /mąk[a]*@/; // moze byc wiele znakow lub 0 "a"
//var regEx = /[a]/; //
//var regEx = /[a]{3}/; // musza byc 3 obok siebie
//var regEx = /^[a-z]{3,4}$/; // musza byc od 3 do 4 znakow
//var regEx = /^[a-z]{3,}$/; // minimum 3 znaki
//var regEx = /\//;
//var regEx = /./; // dowolny jeden znak
//var regEx = /\.pl/; // sprawdza cionk
//var regEx = /\w/; // litera duza lub mała, cyfra lub znak podkreslenia
//var regEx = /\W/; // bez liter cyfr znaków podkreślenia
//var regEx = /\d/; // tylko i wylacznie cyfry
//var regEx = /\D/; // nie moze byc cyfer
//var regEx = /(text)/;   // grupa
//var regEx = /(text){2}/;   // grupa x2 'texttext' obok siebie musi byc
//var sprawdz = regEx.test(tekst);
//console.log(sprawdz);
/*
var tekst = document.getElementById('tekst');
var regEx=/\d{2,2}-\d{3,3}/;
var blok = document.getElementById('blok');
var sprawdz;
function kodPocztowy() {
    sprawdz = regEx.test(tekst.value);
    if(sprawdz){
        blok.style.color = 'blue';
        blok.textContent = 'Prawidłowy kod';
    } else {
        blok.style.color = 'red';
        blok.textContent = 'Nieprawidłowy kod pocztowy';
    }
}
tekst.addEventListener('input',kodPocztowy);
*/

// var regEx = /\w+\.mp3/ // cala nazwa pliku z rozszerzeniem .mp3
var regEx = /\w+\.mp3/g;

var pliki = 'plik.mp3 arkusz.csv muzyka.mp3 zsk.mp3';
//var sprawdz1 = regEx.test(pliki);
var sprawdz1 = pliki.match(regEx);
console.log(sprawdz1);
