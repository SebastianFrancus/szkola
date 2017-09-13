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



