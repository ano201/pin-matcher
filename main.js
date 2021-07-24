//-----generator


const generateBtn = document.querySelector(".generate-btn");
generateBtn.addEventListener("click", function() {
  const randomPin = Math.random();
  const fourDigitPin = Math.round(randomPin*10000);
  if (fourDigitPin >999) {
   const randomPinDisplay = document.getElementById("random-pin-display");
   randomPinDisplay.value = fourDigitPin;
  }
})


//------pin checker

const pinDisplay = document.getElementById("pin-display");
const allBtn = document.querySelectorAll(".button");

for (var i = 0; i < allBtn.length; i++) {
  eachBtn = allBtn[i];
  eachBtn.addEventListener("click", function() {
    if (this.innerText != "C" && this.innerText != "<") {
      pinDisplay.value += this.innerText;
    } else if (this.innerText == "C") {
      pinDisplay.value = "";
    } else {
      
    }
  })
}

const submitBtn = document.querySelector(".submit-btn");
submitBtn.addEventListener("click", function(){
  
})