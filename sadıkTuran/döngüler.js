// DÖNGİLER

//FOR DÖNGÜSÜ

/*

for(var i=0; i<10; i++){
  console.log(i);
}

*/


/*
var sehirler = ["kocaeli","istanbul","izmir","adana","rize"];

for (var i=0; i<sehirler.length; i++){
  console.log(sehirler[i]);
}

*/

//WHİLE DÖNGÜSÜ

/*
var i=0;
while(i<10){
   console.log(i);
   i++;
}
   */

/*
var sehirler = ["kocaeli","istanbul","izmir","adana","rize"];

i=0;
while(i<sehirler.length){
  console.log(sehirler[i]);
  i++;
}
  */




/*

//çift sayıları yazdıran döngü
for (var i=0; i<=100; i++){
  if(i%2==0){
    console.log(i);
  }
}


*/

/*
var i=10;
while(i<=100){
  if(i%5==0){
    console.log(i);
  }
  i++;
}

*/


var k_usename = "guest";
var k_password = "12345";
var loggedin = false;

while(loggedin == false)
{

var username = prompt("kullanıcı adı:");
var password = prompt("parola giriniz:");

if((k_usename == username) && (k_password == password)){
  console.log("giriş yapıldı");
  loggedin=true;
}
else{
  console.log("hatalı kullanıcı adı veya parola");
}

}