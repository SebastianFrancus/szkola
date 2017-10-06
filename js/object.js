
//literał obiektu
var janusz = {
	wzrost: 180,
	waga: 79,
	miejsce: "poznan",
	plec: "m"
};

//alert(janusz.wzrost);

//object auto - marka,model,predkosc,metoda wyswietl

var auto = {
	marka: "Audi",
	model: "a5",
	predkosc: 300,
	wyswietl: function(){
		return this.marka + ", " + this.model + ", " + this.predkosc;
	}
};

//alert(auto.wyswietl());

var ksiunszka = {
	tytul: "Pan Tadeusz",
	rokwydania: 1834,
	gatunek: "poemat epicki",
	autor: {
		imie: "Adam",
		nazwisko: "Mickiewicz",
		wyswietl: function(){
			return this.imie + " " + this.nazwisko;
		}
	}
};

/*console.log(ksiunszka.autor.wyswietl());
console.log(ksiunszka.autor.imie);
console.log(ksiunszka.autor.nazwisko);
console.log(ksiunszka["autor"]["imie"]);*/


//NOWY SUPERANCKI SPOSÓB


var product = {};

//sprawdzenie czy object ma właściwość

/*if(product.nazwa === undefined){
	alert("ni ma");
}*/

//dodanie właściwośći i metody do objectu

product.nazwa = "lodówka";
product.marka = "bosz";
product.waga = 12313;
product.cena = 1500;
product.model = "wakawaka";
product.wyswietl = function(){
	return this.nazwa + ", " + this.marka;
}

/*if(product.nazwa !== undefined){
	alert("jest");
}

 console.log(product.wyswietl())
 console.log(typeof(product.wyswietl));*/


//TABLICE W OBIEKCIE
var platnosci = {
	pokoj1: [1,3,5,7],
	pokoj2: [2,4,6,8],
	pokoj3: [3,6,9,8],
	PoliczInoWszystkie:function(){
        var sumka = 0;
        function dodawanko(a){
            sumka = sumka + a;
        };
        this.pokoj1.forEach(dodawanko);
        this.pokoj2.forEach(dodawanko);
        this.pokoj3.forEach(dodawanko);
        return sumka;
}
}
//alert(platnosci.PoliczInoWszystkie());
/*
alert(platnosci.pokoj1[1])
alert(platnosci.pokoj3.length)
*/

//ZAD DOM  keppo
//Stwórz metodę, która wyświetli sumę wszystkich płatności ze wszystkich pokoi

//NOWY TEMACIK, TAKI NOWY W KIJ
//KONSTRUKTORKI

function Auto() {
	this.marka = "Fiat";
	this.model = "Multipla";
}

var samochod = new Auto();

//alert(samochod.marka);

//INNY KONSTRUKTOREK

function Osoba(imie,nazwisko){
	this.imie = imie;
	this.nazwisko = nazwisko;
	this.wyswietl = function(){
		return this.imie + this.nazwisko;
	}
};

var osoba1 = new Osoba("Brajanek","kek");
var osoba2 = new Osoba("Dżesika","kek");
var full_osoba1 = osoba1;
console.log(full_osoba1);

var hotel = new Object();
hotel.nazwa = 'Hotel Poznań';
hotel.pokoje = 100;
hotel.pokojeZarezerwowane = 24;
hotel.silownia = true;
hotel.rodzajePokoi = ['pojedynczy', 'podwojny', 'apartament'];
hotel.pokojeWolne = function(){
    return this.pokoje-this.pokojeZarezerwowane;
}

//console.log(hotel.pokojeWolne());

//**********************************************************

//var tablica = new Array();

function Hotel(nazwa, pokoje, pokojeZarezerwowane){
    this.nazwa = nazwa;
    this.pokoje = pokoje;
    this.pokojeZarezerwowane = pokojeZarezerwowane;
    this.wolnePokoje = function() {
        return this.pokoje-this.pokojeZarezerwowane;
    }
}

var lech = new Hotel('lech', 45, 30);
var merkury = new Hotel('merkury', 1000, 500);

/*document.write('Wolne pokoje w hotelu Lech ' + lech.wolnePokoje()+ '<br>');
document.write('Wolne pokoje w hotelu Merkury ' + merkury.wolnePokoje()+ '');*/





//zad. utwórz konstruktor o nazwie pies i parametrach: imie, rasa, waga oraz ulubioneZajecia, ktroe moga miec wiele wartosci. Utworz 3 obiekty o nazwach : azor edi saba.

function Pies(imie, rasa, waga, ulubioneZajecie){
    this.imie = imie;
    this.rasa = rasa;
    this.waga = waga;
    this.ulubioneZajecie = ulubioneZajecie;

}
var azor = new Pies('azor','boxer',10,['łapanie kuli', 'zajecie4']);
var edi = new Pies('edi ','kundel ', 30, ['gonienie Patryka', ' gonienie']);
var saba = new Pies('saba', 'owczarek', 70, 'zabijanie wiewiórek');
document.write('Ulubione zajecie azora to: '+ azor.ulubioneZajecie+'<br>')
document.write('Ulubione zajecie ediego to: '+ edi.ulubioneZajecie+'<br>')

var psy = [azor, edi, saba];

edi.ulubioneZajecie.push('spanie');
//console.log(edi.ulubioneZajecie);
//console.log(psy);

var rozmiar;
for(var i=0;i<psy.length;i++){
    if(psy[i].waga > 10){
        rozmiar = 'duzy pies';
    } else{
        rozmiar = 'mały pies';
    }
    document.write('Pies:' + "<span id='a' style='color:red'>"+psy[i].imie+'</span>' + ' to ' + rozmiar+'<br>');
}

var tab = ['Jan ', 'Nowak ', 'Poznań'];
for(var i in tab){
 //  document.write(tab[i]);
}

/*for (var i in edi){
    document.write(edi[i]);
}*/
/*for (var x in edi){
    if(x == 'imie' || x == 'rasa')
    document.write(edi[x]+'<br>');
}*/


//********************************************************************************
//prototype

function Pole(a,b){
    return a*b;
}

/*
console.log(Pole.length);
console.log(Pole.constructor);
console.log(Pole.prototype);
*/


//*****************************************************************

function Uczen(imie,nazwisko){
    this.imie= imie;
    this.nazwisko = nazwisko;
}

var Adrian = new Uczen('Adrian','Nowak');

Uczen.prototype.narodowosc = 'Polska';
Uczen.prototype.wyswietlUcznia = function(){
    return 'Imie: ' + this.imie + ' Nazwisko ' + this.nazwisko + ' Narodowość: ' + this.narodowosc;
}
//document.write(Adrian.wyswietlUcznia());
console.log(Adrian.constructor);
console.log(Adrian.constructor.prototype.narodowosc);

console.log(Adrian.hasOwnProperty('imie')); //true
console.log(Adrian.hasOwnProperty('narodowosc')); //false

/*zad.
Utworz konstruktor rower w ktorym beda wlasciwosci: marka, kolor.Wyświetl wszystkie dane za pomoca metody wyswietlRower. Wykorzystaj for in. Utworz prototype w ktorym bedzie zapisana ilosc kol. */

function Rower(marka, kolor){
    this.marka = marka;
    this.kolor = kolor;
}
Rower.prototype.iloscKol= 2;
Rower.prototype.wyswietlRower = function(){
    for(var i in this){
        if(i != 'wyswietlRower'){
                    document.write(this[i]);
        }
    }
}

var giant = new Rower('Giant ','Czarny ');
giant.wyswietlRower();




