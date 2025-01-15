const display= document.getElementById("display");

function appendToDisplay(input){
  display.value += input;

}

function clearDisplay(){
  display.value = "";


}

function appendValue(value) {
  display.value += value; // Ekrana verilen değeri ekle
}



function calculate() {
  try {
    display.value = eval(display.value); 
  } catch (error) {
    display.value = "Error"; 
  }
}

document.addEventListener("keydown", function (event) {
  const key = event.key;

  console.log("Basılan tuş:", key); // Debugging için log ekle

  if (!isNaN(key) || "+-*/.".includes(key)) {
    // Sayı veya işlem operatörü
    appendValue(key);
  } else if (key === "Enter") {
    calculate(); // Enter ile hesapla
  } else if (key === "Backspace") {
    display.value = display.value.slice(0, -1); // Backspace ile sil
  } else if (key === "Escape") {
    clearDisplay(); // Escape ile temizle
  }
});

