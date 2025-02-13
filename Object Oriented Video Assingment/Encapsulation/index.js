  

// ENSCAPSULATİON


/*

function createPerson(name,age){
  let _name = name;  // Dışarıdan görünmeyen özel veri
  let _age = age;

  return{
    getName : function(){
      return _name;
    },
    setName : function(newName){
      _name = newName;

    },
    getAge : function(){
      return _age;
    },
    setAge : function(newAge){
      if(newAge > 0){
        _age = newAge;

      }else{
        console.log("Yaş 0dan küçük olamaz");
      }
    }
  }
}

const person = createPerson("ali",25);

console.log(person.getName());
console.log(person.getAge());

*/



/*
// ES6 Yazımı

class person {
  #name;
  #age;

  constructor(name,age){
      this. #name = name;
      this. #age = age;
    
  }
      getName(){
        return this.#name;
      }

      setName(newName){
        this.#name = newName;
      }

      getAge(){
        return this.#age;
      }

      setAge(newAge){
        if(newAge>0){
          this.#age = newAge;
        }
        else{
          console.log("Yaş 0dan küçük olamaz");
        }
      }
      

    }


    const person = new person("ayşe",30);
    console.log(person.getName());
    console.log(person.setAge());
    

*/

function createBankAccount(initialBalance) 
{
  let balance = initialBalance;

  return{
    getBalance : function(){
       return balance;
    },

    deposit : function(){
      if(amount > 0){
        balance+=amount;
        console.log(`${amount} TL yatırıldı. Yeni bakiye ${balance} TL`);
      }
      else{
        console.log("Yatırılacak tutar pozitif olmalıdır");
      }
    },
     withdraw : function(){
      if(amount > 0 && amount <= balance){
        balance-=amount;
        console.log(`${amount} TL çekildi.Kalan bakiye ${balance} TL`);
      }
      else{
        console.log("Yetersiz bakiye ya da geçersiz tutar");
      }
     }


  }
}


const myAccount = createBankAccount(1000);

console.log(myAccount.getBalance());
myAccount.deposit(500); // 500 tl yatırıldı yeni bakiye 1500 TL
myAccount.withdraw(300); // 300 tl çekildi yeni tutar 1200 TL
myAccount.withdraw(2000); // yetersiz bakiye


