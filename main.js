const whiteKeys = document.querySelectorAll(".white-key");
const blackKeys = document.querySelectorAll(".black-key");

blackKeys.forEach((black, index) => {
  black.addEventListener("mouseenter", () => {
    let sound = new Audio(`./sounds/black-keys/${index}.mp3`);
    playSound(sound);
  });
});

whiteKeys.forEach((white, index) => {
  white.addEventListener("mouseenter", () => {
    let sound = new Audio(`./sounds/white-keys/${index}.mp3`);
    playSound(sound);
  });
});

function playSound(sound) {
  sound.pause();
  sound.currentTime = 0;
  sound.play();
}

// Add keys

// Use Keys !

const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const ten = document.getElementById("ten");
const eleven = document.getElementById("eleven");
const twelve = document.getElementById("twelve");
const thirteen = document.getElementById("thirteen");
const fourteen = document.getElementById("fourteen");
const fifteen = document.getElementById("fifteen");
const sixteen = document.getElementById("sixteen");
const seventeen = document.getElementById("seventeen");
const eighteen = document.getElementById("eighteen");
const nineteen = document.getElementById("nineteen");
const twenty = document.getElementById("twenty");
const twentyone = document.getElementById("twentyone");


/* */



//Negras
const b1 = document.getElementById("b1");
const b2 = document.getElementById("b2");
const b4 = document.getElementById("b4");
const b5 = document.getElementById("b5");
const b6 = document.getElementById("b6");
const b8 = document.getElementById("b8");
const b9 = document.getElementById("b9");
const b11 = document.getElementById("b11");
const b12 = document.getElementById("b12");
const b13 = document.getElementById("b13");
const b15 = document.getElementById("b15");
const b16 = document.getElementById("b16");
const b18 = document.getElementById("b18");
const b19 = document.getElementById("b19");
const b20 = document.getElementById("b20");



addEventListener("keyup", (e) => {
  if (e.key === "a") {
    one.classList.remove("white-active");
  }
  if (e.key === "s") {
    two.classList.remove("white-active");
  }
  if (e.key === "d") {
    three.classList.remove("white-active");
  }
  if (e.key === "f") {
    four.classList.remove("white-active");
  }
  if (e.key === "g") {
    five.classList.remove("white-active");
  }
  if (e.key === "h") {
    six.classList.remove("white-active");
  }
  if (e.key === "j") {
    seven.classList.remove("white-active");
  }
  if (e.key === "k") {
    eight.classList.remove("white-active");
  }
  if (e.key === "l") {
    nine.classList.remove("white-active");
  }
  if (e.key === ";") {
    ten.classList.remove("white-active");
  }
  if (e.key === "'") {
    eleven.classList.remove("white-active");
  }
  if (e.key === "z") {
    twelve.classList.remove("white-active");
  }
  if (e.key === "x") {
    thirteen.classList.remove("white-active");
  }
  if (e.key === "c") {
    fourteen.classList.remove("white-active");
  }
  if (e.key === "v") {
    fifteen.classList.remove("white-active");
  }
  if (e.key === "b") {
    sixteen.classList.remove("white-active");
  }
  if (e.key === "n") {
    seventeen.classList.remove("white-active");
  }
  if (e.key === "m") {
    eighteen.classList.remove("white-active");
  }
  if (e.key === ",") {
    nineteen.classList.remove("white-active");
  }
  if (e.key === ".") {
    twenty.classList.remove("white-active");
  }
  if (e.key === "/") {
    twentyone.classList.remove("white-active");
  }

//Black Keys
if (e.key === "1") {
  b1.classList.remove("black-active");
}

if (e.key === "2") {
  b2.classList.remove("black-active");
}

if (e.key === "3") {
  b4.classList.remove("black-active");
}

if (e.key === "4") {
  b5.classList.remove("black-active");
}

if (e.key === "5") {
  b6.classList.remove("black-active");
}

if (e.key === "6") {
  b8.classList.remove("black-active");
}

if (e.key === "7") {
  b9.classList.remove("black-active");
}

if (e.key === "8") {
  b11.classList.remove("black-active");
}

if (e.key === "9") {
  b12.classList.remove("black-active");
}

if (e.key === "q") {
  b13.classList.remove("black-active");
}

if (e.key === "w") {
  b15.classList.remove("black-active");
}
if (e.key === "e") {
  b16.classList.remove("black-active");
}
if (e.key === "r") {
  b18.classList.remove("black-active");
}
if (e.key === "t") {
  b19.classList.remove("black-active");
}
if (e.key === "y") {
  b20.classList.remove("black-active");
}


});

addEventListener("keydown", (e) => {
  if (e.key === "a") {
    one.classList.add("white-active");
    playSound(new Audio("./sounds/white-keys/0.mp3"));
  }

  if (e.key === "s") {
    two.classList.add("white-active");
    playSound(new Audio("./sounds/white-keys/1.mp3"));
  }
  if (e.key === "d") {
    three.classList.add("white-active");
    playSound(new Audio("./sounds/white-keys/2.mp3"));
  }
  if (e.key === "f") {
    four.classList.add("white-active");
    playSound(new Audio("./sounds/white-keys/3.mp3"));
  }
  if (e.key === "g") {
    five.classList.add("white-active");
    playSound(new Audio("./sounds/white-keys/4.mp3"));
  }
  if (e.key === "h") {
    six.classList.add("white-active");
    playSound(new Audio("./sounds/white-keys/5.mp3"));
  }
  if (e.key === "j") {
    seven.classList.add("white-active");
    playSound(new Audio("./sounds/white-keys/6.mp3"));
  }
  if (e.key === "k") {
    eight.classList.add("white-active");
    playSound(new Audio("./sounds/white-keys/7.mp3"));
  }
  if (e.key === "l") {
    nine.classList.add("white-active");
    playSound(new Audio("./sounds/white-keys/8.mp3"));
  }

  if (e.key === ";") {
    ten.classList.add("white-active");
    playSound(new Audio("./sounds/white-keys/9.mp3"));
  }
  if (e.key === "'") {
    eleven.classList.add("white-active");
    playSound(new Audio("./sounds/white-keys/10.mp3"));
  }
  if (e.key === "z") {
    twelve.classList.add("white-active");
    playSound(new Audio("./sounds/white-keys/11.mp3"));
  }
  if (e.key === "x") {
    thirteen.classList.add("white-active");
    playSound(new Audio("./sounds/white-keys/12.mp3"));
  }
  if (e.key === "c") {
    fourteen.classList.add("white-active");
    playSound(new Audio("./sounds/white-keys/13.mp3"));
  }
  if (e.key === "v") {
    fifteen.classList.add("white-active");
    playSound(new Audio("./sounds/white-keys/14.mp3"));
  }
  if (e.key === "b") {
    sixteen.classList.add("white-active");
    playSound(new Audio("./sounds/white-keys/15.mp3"));
  }
  if (e.key === "n") {
    seventeen.classList.add("white-active");
    playSound(new Audio("./sounds/white-keys/16.mp3"));
  }
  if (e.key === "m") {
    eighteen.classList.add("white-active");
    playSound(new Audio("./sounds/white-keys/17.mp3"));
  }
  if (e.key === ",") {
    nineteen.classList.add("white-active");
    playSound(new Audio("./sounds/white-keys/18.mp3"));
  }
  if (e.key === ".") {
    twenty.classList.add("white-active");
    playSound(new Audio("./sounds/white-keys/19.mp3"));
  }
  if (e.key === "/") {
    twentyone.classList.add("white-active");
    playSound(new Audio("./sounds/white-keys/20.mp3"));
  }

/*Black Keys*/

  if (e.key === "1") {
    b1.classList.add("black-active");
    playSound(new Audio("./sounds/black-keys/0.mp3"));
  }

  if (e.key === "2") {
    b2.classList.add("black-active");
    playSound(new Audio("./sounds/black-keys/1.mp3"));
  }

  if (e.key === "3") {
    b4.classList.add("black-active");
    playSound(new Audio("./sounds/black-keys/2.mp3"));
  }

  if (e.key === "4") {
    b5.classList.add("black-active");
    playSound(new Audio("./sounds/black-keys/3.mp3"));
  }

  if (e.key === "5") {
    b6.classList.add("black-active");
    playSound(new Audio("./sounds/black-keys/4.mp3"));
  }

  if (e.key === "6") {
    b8.classList.add("black-active");
    playSound(new Audio("./sounds/black-keys/5.mp3"));
  }

  if (e.key === "7") {
    b9.classList.add("black-active");
    playSound(new Audio("./sounds/black-keys/6.mp3"));
  }

  if (e.key === "8") {
    b11.classList.add("black-active");
    playSound(new Audio("./sounds/black-keys/7.mp3"));
  }

  if (e.key === "9") {
    b12.classList.add("black-active");
    playSound(new Audio("./sounds/black-keys/8.mp3"));
  }

  if (e.key === "q") {
    b13.classList.add("black-active");
    playSound(new Audio("./sounds/black-keys/9.mp3"));
  }

  if (e.key === "w") {
    b15.classList.add("black-active");
    playSound(new Audio("./sounds/black-keys/10.mp3"));
  }

  if (e.key === "e") {
    b16.classList.add("black-active");
    playSound(new Audio("./sounds/black-keys/11.mp3"));
  }

  if (e.key === "r") {
    b18.classList.add("black-active");
    playSound(new Audio("./sounds/black-keys/12.mp3"));
  }

  if (e.key === "t") {
    b19.classList.add("black-active");
    playSound(new Audio("./sounds/black-keys/13.mp3"));
  }

  if (e.key === "y") {
    b20.classList.add("black-active");
    playSound(new Audio("./sounds/black-keys/14.mp3"));
  }
  /*




const b16 = document.getElementById("b16");
const b18 = document.getElementById("b18");
const b19 = document.getElementById("b19");
const b20 = document.getElementById("b20");










*/






});

/*Teclas negras*/




/*

    <div class="black-key key black-1" id="b1"></div>
    <div class="black-key key black-2" id="b2"></div>
    <div class="black-key key black-4" id="b4"></div>
    <div class="black-key key black-5" id="b5"></div>
    <div class="black-key key black-6" id="b6"></div>
    <div class="black-key key black-8" id="b8"></div>
    <div class="black-key key black-9" id="b9" ></div>
    <div class="black-key key black-11"id="b11"></div>
    <div class="black-key key black-12" id="b12"></div>
    <div class="black-key key black-13" id="b13"></div>
    <div class="black-key key black-15" id="b15"></div>
    <div class="black-key key black-16" id="b16"></div>
    <div class="black-key key black-18" id="b18"></div>
    <div class="black-key key black-19" id="b19"></div>
    <div class="black-key key black-20" id="b120"></div>

*/