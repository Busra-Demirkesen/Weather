 


 class Araba{

  constructor(marka,model){
     this.marka = marka;
     this.model = model;
  }

  calistir(){
    console.log(`${this.marka} ${this.model} çalıştırıldı`);
  }
 }



 const benimArabam = new Araba('Toyota', 'Corolla');
 benimArabam.calistir();


/*-------------------------------------------------------*/

 class Kullanici {
  constructor(KullaniciAdi, sifre, email){
    this.KullaniciAdi = KullaniciAdi;
    this._sifre = sifre;
    this.email = email;
  }


 sifreDegistir(yeniSifre) {

  if(yeniSifre.length < 6){
    console.log("Şifre en az 6 karakter olmalıdır");
  }
  else{
    this._sifre = yeniSifre;
    console.log("Şifre başarıyla kaydedildi");
  }

 }

 girisYap(girilenSifre){
  if(girilenSifre === this._sifre){
    console.log("Giriş başarılı");
  }else{
    console.log("Hatacı kullanıcı adı ya da şifre girdiniz");
  }
 }
}


const kullanici1 = new Kullanici("Ahmet", "123456", "ahmet@gmail.com");


kullanici1.girisYap("123456");
kullanici1.girisYap("11111"); // hatalı şifre

