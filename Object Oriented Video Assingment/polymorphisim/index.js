


class Odeme {
// örneğin burda constructor kullanılmıyor çünkü dışardan bir veri alıp class içinde işlemiyoruz

odenmesiGerekenTutar(){
  console.log("Ödeme yapılacak tutar hesaplanıyor");
}




odemeYap(){
  console.log("Genel ödeme işlemi");
}

}

class KrediKarti extends Odeme{
  odemeYap(){
  console.log("Kredi kartıyla ödeme yapıldı");
}
}

class PayPal extends Odeme{
  odemeYap(){
  console.log("PayPal ile ödeme yapıldı");
}
}

class BankaHavalesi extends Odeme{
  odemeYap(){
    console.log("Banka havalesi ile ödeme yapıldı");
  }
}

