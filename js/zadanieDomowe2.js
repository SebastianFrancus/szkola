function stozek(form){
var wybor= form.wybor.value;
var wynik = document.getElementById("wynik");
    var r = form.r.value;
    var l = form.l.value;
    var h = form.h.value;
    var odp;
    if(wybor == 'pole'){
        odp = Math.round((Math.PI * Math.pow(r,2) ) + (Math.PI* r * l));
    }else if(wybor == "obwod"){
        odp = Math.round(2* Math.PI * r);
    }else if(wybor == "objetosc"){
        odp = Math.round(1/3 * Math.PI * Math.pow(r,2) * h);
    }else {
        odp = "Uzupełnij dane";
    }
    wynik.innerHTML = odp;
}
