//-----generator

const actionLeft = document.querySelector(".action-left");
let tryLeft = 3;
const generateBtn = document.querySelector(".generate-btn");
generateBtn.addEventListener("click", function() {
  const randomPin = Math.random();
  const fourDigitPin = Math.round(randomPin * 10000);
  if (fourDigitPin > 999) {
    randomPinDisplay = document.getElementById("random-pin-display");
    randomPinDisplay.value = fourDigitPin;
  }
  actionLeft.innerText = tryLeft + " try left";
  for (var i = 0; i < notify.length; i++) {
    notify[i].style.display = "none";
  }
  pinDisplay.value = "";
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
      pinDisplay.value = pinDisplay.value.substring(0, pinDisplay.value.length - 1)
    }
  })
}

const submitBtn = document.querySelector(".submit-btn");
submitBtn.addEventListener("click", function() {
  notify = document.querySelectorAll(".notify");
  if (pinDisplay.value == randomPinDisplay.value) {
    notify[1].style.display = "block";
    randomPinDisplay.value = "";
    actionLeft.display = "none";
  } else {
    notify[0].style.display = "block";
    tryLeft-=1;
    actionLeft.innerText = tryLeft + " try left"
  }
  if (tryLeft == 0) {
    submitBtn.disabled = "true";
  }
})