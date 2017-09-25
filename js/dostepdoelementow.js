//Metoda getElementById()

var elPierwszy = document.getElementById('pierwszy');
console.log(elPierwszy);
elPierwszy.className = 'niebieski';


// Metoda getElementsByTagName

var elNaglowek= document.getElementsByTagName('h2');
if(elNaglowek.length > 0){
    console.log(elNaglowek);
    elNaglowek[0].className= 'niebieski'
}

// Metoda getElementsByClassName()

var elCzerwony = document.getElementsByClassName('czerwony');
if (elCzerwony.length > 0){
    console.log(elCzerwony);
}

// metoda szybsza

//var ostatni = elCzerwony[elCzerwony.length - 1];

//ostatani.className = 'niebieski';

//metoda wolniejsza

var ostatni = elCzerwony.item(elCzerwony.length-1);
ostatni.className='niebieski';


// Metoda getElementsByName()

var auto = document.getElementsByName('auto');
auto[1].className = 'niebieski';
console.log(auto);

// Metoda querySelector

// zwraca pierwszą wartość
//var auto1 = document.querySelector('li');
var auto1 = document.querySelector('li.niebieski');
auto1.className = 'czerwony';



// Metoda querySelectorAll

var naglowek2 = document.querySelectorAll('h1');

naglowek2[0].className = 'niebieski';

document.getElementById('przycisk').onclick = function(){
var wszystkie = document.querySelectorAll('li');
    wszystkie[0].className = 'czerwony';
    wszystkie[1].className = 'czerwony';
    wszystkie[2].className = 'czerwony';
    wszystkie[3].className = 'czerwony';

}

/*
var elGuzik = document.getElementById('guzik');

var klub = document.getElementsByName('klub');
*/

/*elGuzik.onclick = function(){
    console.log(klub);
    for (var i=0;i<klub.length;i++){
        klub[i].className = 'niebieski';
    }
}*/


//forEach
var elGuzik = document.getElementById('guzik');

var klub = document.getElementsByName('klub');

function zmien(element, indeks){
    klub[indeks].className = 'niebieski';
}

elGuzik.onclick = function (){
    klub.forEach(zmien);
}
