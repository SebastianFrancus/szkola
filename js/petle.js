/*

for (i=0;i <=10; i++){
    document.write(i);
    if (i == 6){
        break;
    }
}*/

// losuj 10 liczb z przedzialu <10;100>

/*for (i = 0; i <= 100; i++){
    document.write(Math.floor(Math.random() * 91 + 10)+'<br> ');

}*/

/*for (i = 1; i <=10;i++){
    if (i==1){
        document.write(i+' raz <br>')}
        else {document.write(i+ ' razy <br>')
    }
}*/

// Użytkownik podaje z klawiatury wartosc poczatkowa i koncowa petli po kazdej liczbie dodaj przecinek a tylko po ostatniej liczbie dodaj kropkę. Pierwsza liczba musi być mniejsza od drugiej.


/*var a=prompt('podaj wartosc poczatkowa');
var z=prompt('podaj wartosc koncowa');

for (;a<=z;a++){
    if (a==z) {document.write(a + '.')}
    else {document.write(a + ', ' )}
}*/

///////////////////// while ///////////////////

/*
var i=0;
while (i++ < 5) {
    document.write(i + '<br>');
}
*/

/*var x = 0, y = 0;

while (x >= y){
    x= Number(prompt('podaj x'));
    y= Number( prompt('podaj y'));
}

document.write('Podales poprawne wartosci: <br>' + "x= " +x + ',y= ' +y +'<br>');*/

/*           DO      WHILE                */

/*do {
    var wiek = prompt('Podaj wiek');
    if (wiek == 18){
        document.write("Masz 18 lat");
    }
}while (wiek != 18);*/

//wykorzystaj petel for i do while podaj 5 liczb podzielnych przez 2 z klawiatury. Zapisz je do tablicy i wyswietl w konsoli

/*
var liczby = [];
var x;
for (var i=0; i<5;i++){

    do {
    x = prompt('podaj x');
    x = parseInt(x);
  } while (x % 2 != 0)
      liczby[i] = x;
}
console.log(liczby);
*/


// Użytkownik podaje z klawiatury liczbe zabezpiecz przed podaniem litery, znaku specjalnego.
/*

document.write('<input type="text" id="liczba">');
document.write('<button id="przycisk">Wyślij </button>');

var elPrzycisk = document.getElementById('przycisk');
var elLiczba = document.getElementById('liczba');
elPrzycisk.onclick = function(){
    var wartosc = elLiczba.value;
    if(!isNaN(wartosc)){
        console.log(wartosc);
    }
}
*/
/*
Program wyswietlajacy liczby od 1- 10 w pieciu rzedach po kazdej liczbie ma byc przecinek na koncu w kazdym rzedzie ma byc kropka.*/

/*for (var i = 0; i<5;i++){
    for(var j = 1; j <= 10;j++){
        if(j==10){
        document.write(j+ '. <br> ');
    } else {
        document.write(j + ', ');
    }
}
}*/

//Zad choinka


/*for (var i=1; i<10; i++){
    for(var j=0; j<i; j++){
        document.write("*");
    }
    document.write('<br>');
}*/

/*
Podaj z klawiatury maksymalna ilosc gwiazdek. Zrób petle w ktorej zabezpieczysz przed podaniem blednych danych.*/
/*do {
var x= prompt('podaj ilosc gwiazdek');
} while(isNaN(x) || x <=0)

    for (var i=1; i<=x; i++){
        for(var j=0; j<i; j++){
        document.write("*");
    }
    document.write('<br>');
}*/

/*Uzytkownik podaje login i haslo w formularzu. Jesli login to admin a haslo to tajne@123 to na ekranie wyswietli sie w kolorze czerwonym poprawne haslo*/


/*var elLogin = document.getElementById('login');
var elPass = document.getElementById('password');
var elPrzycisk = document.getElementById('check');
var elBlok = document.getElementById('blok');

elPrzycisk.onclick= function (){
        if(elLogin.value == 'admin' && elPass.value == 'tajne@123'){
            elBlok.style.color = 'red';
            elBlok.innerHTML = 'Poprawne haslo';
        } else {
            elBlok.style.color = 'green';
            elBlok.innerHTML = 'Blędne hasło';
        }
}*/


//*************************             foreach          *******************\\
var tab = ['Anna', 'Jacek', 'Janusz', 'Adrzej']

for (var i = 0; i <= tab.length - 1;i++){
    //document.write(tab[i] + ', ')
}

function p(wartosc,indeks){
    document.write('Indeks ' + indeks + ': '+wartosc + '<br>');
}

tab.forEach(p);






