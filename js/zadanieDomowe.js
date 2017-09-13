var tab = [];

function zaddomowe(form){
    tab [0] = form.login.value;
        tab[1] = form.haslo.value;
            tab[2] = form.kolor.value;
var  naglowek2= document.getElementById('naglowek2');
     naglowek2.style.color = tab [2];
             naglowek2.innerHTML = "Logi to: " + tab[0] + " hasło to: " + tab[1];
}
