var opel={
   marka:'opel',
   model:'corsa',
   yil:'2015',
   renk:'mavi',
   otomatik: true
};

console.log(opel);



// farklı bir object tanımlama yöntemi daha var
var toyota = new Object();
toyota.marka='toyota';
toyota.model='yaris';
toyota.yil='2012';
toyota.renk='kırmızı';
toyota.otomatik=true;

console.log(toyota);

toyota.model='auris'; // toyotanın model bilgisini değiştirdik

//objeleri bir diziye atayabiliriz

var arabalar = [
  {
    marka:'opel',
    model:'corsa',
    yil:'2015',
    renk:'mavi',
    otomatik:true
  }
  ,
  {
    marka:'mazda',
    model:'CX-3',
    yil:'2017',
    renk:'beyaz',
    otomatik:true
  }
]

console.log(arabalar[0].renk);

for(var i=0; i<arabalar.length; i++){
    console.log(arabalar[i].marka);
}




/*
Bir personelin aşağıdaki bilgilerini object içinde saklayınız
ad:   Ali
soyad:   Yılmaz
cinsiyet:   Erkek
telefon:   0123456789
adres:   İstanbul
meslek:   bilgisayar mühendisi
diller:   ingilizce,almanca
hobiler   :sinema,spor,kitap okumak


--Bu personel kaç dil bilmektedir
--Bu personelin hobilerini alt alta yazdırınız
--3 elemanlı bir personel bilgi listesi oluşturunuz
*/

var ali = {
  ad:'Ali',
  Soyad:'Yılmaz',
  cinsiyet:'Erkek',
  telefon:'0123456789',
  adres:'İstanbul',
  meslek:'Bilgisayar Mühendisi',
  diller:['İngilizce','Almanca'],
  hobiler:['sinema','spor','kitap okumak']

}
console.log(ali);

ali.hobiler.forEach(function(hobi){
  console.log(hobi);
});




