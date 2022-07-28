const featuresHead = document.querySelector(".features-head");
const featuresPara = document.querySelector(".features-para");
const featuresImage = document.querySelector(".features-image");

const hamburger = document.querySelector(".hamburger");
const list = document.querySelectorAll(".overlay-nav li");
const navLinks = document.querySelector(".nav-overlay");

hamburger.addEventListener("click", () => {
  const navLinks = document.querySelector(".nav-overlay");
  navLinks.classList.toggle("nav-active");
  hamburger.classList.toggle("hamburger-active");
});

list.forEach((li) => {
  li.addEventListener("click", () => {
    navLinks.classList.toggle("nav-active");
    hamburger.classList.toggle("hamburger-active");
  });
});

function tab1() {
  featuresHead.innerText = "Enjoy stability";
  featuresPara.innerText =
    "We know how to code, not only how to cherry-pick - which is why our ROM is quite stable. :)";
  featuresImage.src = "./images/img4 1.png";
}

function tab2() {
  featuresHead.innerText = "Open source";
  featuresPara.innerText =
    "Unlike many Android ROMs, we do not only share our source - we actively give back. We provide mods like OpenWellbeing decoupled of our ROM and help our friends debug issues, even if they belong to another ROM.";
  featuresImage.src = "./images/img4 1.png";
}

function tab3() {
  featuresHead.innerText = "Our UI";
  featuresPara.innerText =
    "Because we're tired of ROMs all looking the same or being gore - we have another unique option for you!";
  featuresImage.src = "./images/img4 1.png";
}

function tab4() {
  featuresHead.innerText = "Everyone welcome";
  featuresPara.innerText =
    "Everyone is welcome to just use this ROM or get actively involved! You can translate, design, build, code or just spread the word!";
  featuresImage.src = "./images/img4 1.png";
}

function tab5() {
  featuresHead.innerText = "Healthy community";
  featuresPara.innerText =
    "We are not another toxic gaming ROM community - we do help unofficial maintainers and answer all users' questions.";
  featuresImage.src = "./images/img4 1.png";
}

gsap.to(".droid", { y: 0, duration: 1 });
gsap.to(".ng", { y: 0, duration: 1, delay: 0.2 });
gsap.to(".loader", { opacity: 0, duration: 1, delay: 1.5 });
