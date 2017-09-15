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


var a=prompt('podaj wartosc poczatkowa');
var z=prompt('podaj wartosc koncowa');

for (;a<=z;a++){
    if (a==z) {document.write(a + '.')}
    else {document.write(a + ', ' )}
}
