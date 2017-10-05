
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
alert(platnosci.PoliczInoWszystkie());
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

alert(samochod.marka);

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
