var marka = "opel";
var model = "astra";
var otomatik = "yes";
/* İf/ Else statement */

if(otomatik=='yes'){
  console.log('Araç otomatiktir');
}
else{
  console.log('Araç otomatik değildir');
}


otomatik = true;
if(otomatik){
  console.log(marka + model + 'otomatik');
}


if(otomatik=='true')
{
  console.log("true"); //string ifade ile boolean türünü karşılaştıramadı
}

if(10=='10'){
  console.log('satılar eşit'); //numberı eşitlikten önce stringe çevirir
}



/*switch statement */
// 1 manuel
//2 otomatik
var vites = '2';
if(vites==1){
  console.log('araç manuel');  
}
else if (vites==2){
  console.log('araç otomatik');
}
else{
  console.log("araç vitesi bulunamadı")
}


switch(vites){
  case '1':
    console.log('araç manuel');
    break;
  case '2' :
    console.log('araç otomatik');
    break;
    default:
      console.log('yanlış değer');
  
}

// iki seçenekten fazlası varsa switch kullanmak daha mantıklı


/* Utgulama 1:
Girilen doğum yılına göre ehliyet alınıp alınamayacağını hesaplayınız.Eğer 18 yaşından küçükse ehliyet almaya kaç senesi akalmıştır.

Uygulama 2
girilen ay bilgisine göre mevsim bilgisi yazınız
*/

var dogum = prompt("Doğum yılınızı giriniz");
var yil = 2024;
var yas = yil-dogum;
console.log(yas);
if(yas<18){
  console.log('Ehliyet alamazsınız');
  console.log("Ehliyet alabilmek için"+(18-yas)+"sene beklemelisiniz");

}
else if(yas>=18){
  console.log('Ehliyet alabilirsiniz');

}
else{
  console.log('yanlış bir değer girdiniz');
}




//uygulama 2

var ay = prompt("kaçıncı ayda olduğunuzu giriniz");

switch(ay){
  case '1':
  case '2':
  case '3':
    console.log("kış mevsimi");
    break;
  
  case '4':
  case '5':
  case '6':
        console.log("ilkbahar mevsimi");
        break;

  case '7':
  case '8':
  case '9':
    console.log("yaz mevsimi");
    break;

  case '10':
  case '11':
  case '12':
    console.log("sonbahar mevsşmş");
    break; 
    default:
      console.log('yanlış bir ay girdiniz'); 
}


