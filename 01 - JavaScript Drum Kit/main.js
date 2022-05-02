function removeTransition(e) {
  if (e.propertyName !== "transform") return; // skip it if it's not a transform

  this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key"); // Get all the keys
keys.forEach((key) => {
  key.addEventListener("transitionend", removeTransition);
  key.addEventListener("click", playSound);
});

function getKeyCode(e) {
  let keycode = 0;
  if (e.type === "click") {
    keycode = e.srcElement.parentElement.getAttribute("data-key");
    console.log(keycode);
  } else {
    keycode = e.keyCode;
    console.log(keycode);
  }
  return Number(keycode);
}

function playSound(e) {
  num = getKeyCode(e);
  const audio = document.querySelector(`audio[data-key="${num}"]`); // Find the audio element with the data-key attribute matching the keydown event
  const key = document.querySelector(`.key[data-key="${num}"]`); // Find the audio element with the data-key attribute matching the keydown event
  if (!audio) return; // If there is no audio element, return
  audio.currentTime = 0; // Reset the audio element to the start
  audio.play(); // Play the audio element
  key.classList.add("playing"); // Add the playing class to the key element
}

window.addEventListener("keydown", playSound);
