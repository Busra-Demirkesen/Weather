var ad = prompt("adınızı giriniz");
var ogrno = prompt("öğrenci numaranızı giriniz");
var cinsiyet = ("cinsiyet:")   //kadın:true erkek:false
var ders = prompt("ders adı");
var not1 = prompt("not1:");
var not2 = prompt("not2:");
var ortalama = (Number(not1) + Number(not2))/2;

console.log(ogrno + " numaralı " + ad + " isimli öğrencinin " + ders + " dersinden aldığı not ortalaması " + ortalama)