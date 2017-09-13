//document.write('test');

var imie = 'Janusz';
var nazwisko;

nazwisko = 'Nowak';
//document.write('imie:' + imie + '<br>Nazwisko:' + nazwisko);
var wiek = 19;
var wiek2 = 20;
var sredniWiek = (wiek + wiek2)/2;
console.log('Sredni wiek wynosi: '+ sredniWiek);
//window.alert(sredniWiek)

var a = 5, b = '3';
var suma = a + b;
console.log(suma);

console.log(10 - '20' + 30); //20
console.log(10 + '20' + 30); //102030


var c = 10;
var d = 2.5;
console.log(typeof(c));
console.log(typeof(imie)); // sprawdzanie typow

var log = true;
console.log(typeof(log));
var x = null;
var y;
console.log(typeof(x)); // object
console.log(typeof(y)); // undefined

var dziesietna = 20;
var oktalna = 020;
var hex = 0x20;

console.log(oktalna); //16
console.log(hex);   //32

console.trace(); // wskazuje w jakim pliku jestesmy

var name= 'Anna';
console.log(typeof(name));
name = parseInt(name);
console.log(name); // NaN
console.log(typeof(name));

var j = '1';
j = parseInt(j);
console.log(j);


var k = '3.999999999';
k = parseInt(k);
console.log(k); // 3
k = parseFloat(k);
console.log(k);

var age1 = prompt('Podaj wiek 1');
age1 = parseInt(age1);
var age2 = prompt('Podaj wiek 2');
age2 = parseInt(age2);
console.log(typeof(age1));
var wynik = (age1+age2)/2
console.log(wynik);

//document.getElementById('naglowek').innerHTML = wynik;

var elNaglowek = document.getElementById('naglowek');
elNaglowek.innerHTML = wynik;
elNaglowek.style.color = 'red';
kolor = prompt('Podaj kolor');
elNaglowek.style.color = kolor;




