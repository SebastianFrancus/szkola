// tworzenie tablicy za pomocą literału tablicy

var kolory = ['czerwony', 'zielony', 'czarny'];
console.log(kolory[0]);

//tworzenie tablicy za pomocą Array

var samochody = new Array('BMW', 'Audi', 'Ferrari');
console.log(samochody[0]);
console.log(samochody[samochody.length - 1]);
console.log(samochody.length);
console.log(samochody);

var nowy = prompt('podaj markę');
samochody[0] = nowy;
console.log(samochody);

//tablica wielowymiarowa

var tab = new Array(
    new Array('Janusz', 'Kowal', 'Poznań'),
    new Array('Jan', 'Nowak', 'Gniezno'),
    new Array('Beata', 'Kowal', 'Gniezno')

);

console.log(tab[1][2]);

var imiona = ['Janusz', 'Anna', 'Krystyna', 'Zenek'];
console.log(imiona);

var posortowane = imiona.sort();
console.log(posortowane);

var odwrotnosc = posortowane.reverse();
console.log(odwrotnosc);

console.log(odwrotnosc.indexOf('Krystyna'));  //1
console.log(odwrotnosc.indexOf('Krystynaa')); // jak nie ma takiej wartosci w tablicy to wyskakuje -1

odwrotnosc.pop();
odwrotnosc.push('ostatni');
odwrotnosc.unshift('pierwszy');
console.log(odwrotnosc);

// tablica z liczbami

var liczby = [1,2,20,190,-1,1000000];
console.log(liczby);
liczby.sort(function(a,b){
    return (a - b);
});
console.log(liczby);


// utworz formularz z loginem (text) i haslem (password). Zapisz dane w tablicy. Wyświetl w nagłówku drugiego stopnia. Użytkownik podaje również kolor w jakim tekst ma być wyświetlony.


