var marka = ["opel", "toyota", "mazda", "renault"];
var model = new Array("corsa", "Yaris", "CX-3", "Clio");
console.log(marka[0]);
console.log(model[2]);

model[0]= "Astra";
console.log(model);

var auris= ["Toyota","Auris",42,true];
auris.push("blue");
auris.unshift("Hacback")
console.log(auris);

for(var i=0; i<marka.length; i++){
  console.log(marka[i]);
}



//Dizinin içinde herhangi bir elemanı aramak istersek
// indexof -1 e eşit değilse var demektir



if(marka.indexOf('mazda')!== -1){
  console.log("marka mevcut");
}else{
  console.log("aranılan marka bulunamadı");
}



/*    UYGULAMA


var now= 2018;
var models=['toyota','mazda','mercedes','opel'];
var years=['2015','2012','2016','2014];


1. tüm modelleri yazdırın

2. Aşağıdaki görüntüyü konsolda oluşturun
//toyota 2015 model ve 3 yaşında bir araçtır
//mazda 2012 model ve 6 yaşında bir araçtır
//mercedes 2016 model ve 2 yaşında bir araçtır
//opel 2014 model ve 4 yaşında bir araçtır

3. model ve years dizilerine eleman eklenebilsin

*/
var now = 2018;
var models = ['toyota','mazda','mercedes','opel'];
var years = ['2015','2012','2016','2014'];

for(i=0; i<models.length; i++){
  console.log(models[i]);
}


for(var i=0; i<models.length; i++){
  console.log(models[i]+' '+years[i]+' model ve '+(now-years[i])+' yaşında bir araçtır');
}



var model = prompt("model giriniz");
var year = prompt("model yılını giriniz");

models.push(model);
years.push(year);