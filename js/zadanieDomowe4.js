var pliczki = document.getElementById('pliczki');
var przcisk = document.getElementById('przycisk');
var blok1 = document.getElementById('blok1');
var blok2 = document.getElementById('blok2');
    var regNazwa = /^([a-z]*\.*)*$/;
    var regJPG = /^([a-z]*\.*)*\.jpg$/;
    var regBMP = /^([a-z]*\.*)*\.bmp$/;
var jpg = [];
var bmp = [];

function sprawdz(){
    var wartosc = pliczki.value.split(" ");
    for (var i=0; i<wartosc.length;i++){
        if(regNazwa.test(wartosc[i]) == true){
            if(regJPG.test(wartosc[i]) == true){
               jpg.push(wartosc[i]);
               }else if(regBMP.test(wartosc[i])){
                   bmp.push(wartosc[i]);
               }else{
                   //blok1.textContent = "wszystko git"
               }
        }else {
            blok1.textContent = 'Nie spełnia warunku';
        }
    }
    jpg.sort();
    bmp.sort();
    document.getElementById('blok2').innerHTML = "Plik z rozszerzzeniem .jpg: " + jpg + "<br> Pliki z rozszerzeniem bmp: " + bmp;

}
przycisk.addEventListener('click',sprawdz)
