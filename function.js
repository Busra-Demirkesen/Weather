function topla(a,b){
  return  a+b;
}

var sonuc = topla(10,20);
console.log(sonuc);




var now=2024;
function yashesapla(dogumyili){
  return now-dogumyili;

}

var yas=yashesapla(1950);
console.log(yas);


function emeklilikHesapla(ad,dogumyili){
  var k_yas = yashesapla(dogumyili);
  var emeklilik = 65-k_yas;

  if(emeklilik>0){
    console.log(ad+ ' '+emeklilik+'yıl sonra emekli olabilir');
  }
  else{
     console.log(ad + ((emeklilik)*-1)+'yıl önce emekli olmuştur');
     
  }
}

emeklilikHesapla('busra',1950)