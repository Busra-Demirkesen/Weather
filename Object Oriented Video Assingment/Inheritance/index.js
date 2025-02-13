// Önce genel bir araçlar classı oluşturduk.Şimdi buradan farklı classlar türeteceğiz.

class Vehicle{
  constructor(brand,model,year){  //Constructor'da tanımlamaları yapıp kod bloğunu kapatıyoruz. 

    this.brand = brand;
    this.model = model;
    this.year = year;
    this.speed = 0;
}

accelerate(amount){ // burda hız artırmayla ilgili bir fonk yazdık
  this.speed += amount; // hızı artırıldı
  console.log(`${this.brand} ${this.model} hızlandı.Şu anki hızı ${this.speed} km/s`);
}

brake(amount){ // hız azaltmayla ilgili fonk yazdık.

  this.speed -= amount;
  if(this.speed < 0) this.speed = 0;

    console.log(`${this.brand} ${this.model} fren yaptı. Şu anki hızı ${this.speed} Km/s`);
}

honk(){     //Kornaya basmayla ilgili bir fonk yazdık
  console.log(`${this.brand} ${this.model} kornaya bastı`);
}

}


class Car extends Vehicle{ //burada Vehicleden yeni bir dal türetiyoruz
  constructor(brand,model,year,doors){
    super(brand,model,year);  // SUPER komutu ile Vehicle sınıfının constructor verilerine ulaşıyoruz
    this.doors = doors;
  }

  openTrunk(){
    console.log(`${this.brand} ${this.model} bagajını açıor`);
  }

}

class Truck extends Vehicle{
  constructor(brand, model, year,capacity){
    super(brand,model,year);
    this.capacity = capacity;
  }

  loadCargo(amount){
    console.log(`${this.brand} ${this.model} ${amount} kg yük yükledi`);

  }
}


const myCar = new Car("toyota", "corolla", 2020,4);
myCar.accelerate(50); //hızlandı
myCar.brake(20);  //yavaşladı
myCar.openTrunk();  //bagaj açıldı



const myTruck = new Truck("volvo","FH16",2022,1000);
myTruck.accelerate(60); //hızlandı
myTruck.loadCargo(1000); //kargo yüklendi