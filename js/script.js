// HAMBURGER ANIMATION SELECTORS
const line1 = document.querySelector(".line1");
const line2 = document.querySelector(".line2");
const line3 = document.querySelector(".line3");
const lineArray = [line1, line2, line3];

// HAMBURGER CLICK EVENT
const hamburger = document.querySelector(".hamburger");
const menuOverlay = document.querySelector(".menu-overlay");

hamburger.addEventListener("click", () => {
  menuOverlay.classList.toggle("open");
  lineArray.forEach((item) => {
    item.classList.toggle("morph");
  });
});

// RETRACTING MENU ON NAV-LINK CLICK
document.querySelectorAll(".nav-links").forEach((item) => {
  item.addEventListener("click", () => {
    menuOverlay.classList.toggle("open");
    lineArray.forEach((item) => {
      item.classList.toggle("morph");
    });
  });
});

// CHANGING NAVBAR BACKGROUND ON SCROLL + LOGO AND HAMBURGER
const nav = document.getElementById("nav");
const home = document.getElementById("home");
const logo = document.getElementById("nav-logo");

window.onscroll = function () {
  if (
    window.pageYOffset > home.scrollHeight / 4 &&
    window.pageYOffset < home.scrollHeight * 4.7
  ) {
    nav.style.background = "white";
    nav.style.boxShadow = "0 4px 2px -2px rgba(0,0,0,0.2)";
    logo.src = "./images/proteron-logo-black.svg";
    lineArray.forEach((item) => {
      item.style.backgroundColor = "black";
    });
  } else if (window.pageYOffset > home.scrollHeight * 4.7) {
    nav.style.boxShadow = "none";
    logo.src = "./images/proteron-logo-black.svg";
  } else {
    nav.style.background = "transparent";
    nav.style.boxShadow = "none";
    logo.src = "./images/proteron-logo-white.svg";
    lineArray.forEach((item) => {
      item.style.backgroundColor = "white";
    });
  }
};

// FADE IN ACTION
const faders = document.querySelectorAll(".fade-in"); // QuerySelector in charge of fade in action
const AppearOptions = {
  threshold: 1,
};
const appearOnscroll = new IntersectionObserver(function (
  entries,
  appearOnscroll
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnscroll.unobserve(entry.target);
    }
  });
},
AppearOptions);

faders.forEach((fader) => {
  appearOnscroll.observe(fader);
});

//DISPLAYING FORM ON BUTTON CLICK
const formOverlay = document.querySelector(".form-overlay");
const quoButton = document.querySelector(".quotation-button");
const crossButton = document.querySelector(".form-close");

function toggleForm() {
  formOverlay.classList.toggle("open");
}

quoButton.addEventListener("click", () => {
  toggleForm();
});

crossButton.addEventListener("click", () => {
  toggleForm();
});

//TOGGLING CHECKBOX ON DIV CLICK
const cb1 = document.getElementById("checkbox1");
const cb2 = document.getElementById("checkbox2");
const cb3 = document.getElementById("checkbox3");
const cb4 = document.getElementById("checkbox4");
const cb5 = document.getElementById("checkbox5");

const ch1 = document.getElementById("check1");
const ch2 = document.getElementById("check2");
const ch3 = document.getElementById("check3");
const ch4 = document.getElementById("check4");
const ch5 = document.getElementById("check5");

const checked = document.getElementsByClassName(".checked-svg");
const unchecked = document.getElementsByClassName(".unchecked-svg");

cb1.addEventListener("click", () => {
  ch1.click();
  if (ch1.checked) {
    cb1.style.backgroundColor = "#f3115b";
    cb1.style.color = "white";
    document.getElementById("unchecked-svg1").style.display = "none";
    document.getElementById("checked-svg1").style.display = "block";
  } else {
    cb1.style.backgroundColor = "#f3f3f3";
    cb1.style.color = "black";
    document.getElementById("unchecked-svg1").style.display = "block";
    document.getElementById("checked-svg1").style.display = "none";
  }
});

cb2.addEventListener("click", () => {
  ch2.click();
  if (ch2.checked) {
    cb2.style.backgroundColor = "#f3115b";
    cb2.style.color = "white";
    document.getElementById("unchecked-svg2").style.display = "none";
    document.getElementById("checked-svg2").style.display = "block";
  } else {
    cb2.style.backgroundColor = "#f3f3f3";
    cb2.style.color = "black";
    document.getElementById("unchecked-svg2").style.display = "block";
    document.getElementById("checked-svg2").style.display = "none";
  }
});

cb3.addEventListener("click", () => {
  ch3.click();
  if (ch3.checked) {
    cb3.style.backgroundColor = "#f3115b";
    cb3.style.color = "white";
    document.getElementById("unchecked-svg3").style.display = "none";
    document.getElementById("checked-svg3").style.display = "block";
  } else {
    cb3.style.backgroundColor = "#f3f3f3";
    cb3.style.color = "black";
    document.getElementById("unchecked-svg3").style.display = "block";
    document.getElementById("checked-svg3").style.display = "none";
  }
});

cb4.addEventListener("click", () => {
  ch4.click();
  if (ch4.checked) {
    cb4.style.backgroundColor = "#f3115b";
    cb4.style.color = "white";
    document.getElementById("unchecked-svg4").style.display = "none";
    document.getElementById("checked-svg4").style.display = "block";
  } else {
    cb4.style.backgroundColor = "#f3f3f3";
    cb4.style.color = "black";
    document.getElementById("unchecked-svg4").style.display = "block";
    document.getElementById("checked-svg4").style.display = "none";
  }
});

cb5.addEventListener("click", () => {
  ch5.click();
  if (ch5.checked) {
    cb5.style.backgroundColor = "#f3115b";
    cb5.style.color = "white";
    document.getElementById("unchecked-svg5").style.display = "none";
    document.getElementById("checked-svg5").style.display = "block";
  } else {
    cb5.style.backgroundColor = "#f3f3f3";
    cb5.style.color = "black";
    document.getElementById("unchecked-svg5").style.display = "block";
    document.getElementById("checked-svg5").style.display = "none";
  }
});

//OPENING AND CLOSING FORM-MODAL
document.getElementById("quotation-button").addEventListener("click", () => {
  document.querySelector(".form-modal").style.display = "flex";
});

document.getElementById("form-close").addEventListener("click", () => {
  document.querySelector(".form-modal").style.display = "none";
});

document.getElementById("cross-button").addEventListener("click", () => {
  document.querySelector(".form-modal").style.display = "none";
});
