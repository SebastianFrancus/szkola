function witaj(imie){
    document.write('Witaj ' + imie);
}
var name = 'Janusz '; // zmienna globalna
witaj(name);



function poleProstokata(){
    var a = document.getElementById("szerokosc").value;
    var b = document.getElementById("dlugosc").value;
    var pole = a * b; // zmienna lokalna
    var elWyswietl = document.getElementById("wyswietl");
    elWyswietl.innerHTML= a * b;

}

    var elPrzycisk = document.getElementById("przycisk");


function poleObjetosc(szerokosc, dlugosc, wysokosc){
    var pole = szerokosc * dlugosc;
    var objetosc = pole * wysokosc;
    var wynik = [pole, objetosc];
    return wynik;
}
console.log(poleObjetosc(2,3,4));

var pole = poleObjetosc(2,3,10)[0];
var objetosc = poleObjetosc(2,3,10)[1];
console.log(pole);
console.log(objetosc);

var x = prompt('Podaj wartosc','0 - pole, 1 - objetosc');
    console.log(poleObjetosc(1,2,3)[x]);

console.log(Math.PI);

// zad dom
// Napisac skrypt ktory oblicza pole, obwod oraz objetosc stozka. Dane uzytkownika podaje z klawiatury. Wykorzystaj obiekt Math. Użytkownik wybiera za pomocą pola radio co chce obliczyć. Dane wprowadza w formularzu. Wynik wyświetla w bloku.





