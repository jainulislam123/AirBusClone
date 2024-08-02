const user = document.querySelector(".User #AccoutOpen");
let userList = document.querySelector("#user");
let show = 1;
user.addEventListener("click", (e) => {
  userList.style.display = "block";
  if (show == 1) {
    userList.style.display = "block";
    show = 2;
  } else {
    userList.style.display = "none";
    show = 1;
  }
});

let show2 = true;
const heroSection = document.querySelector("#heroSection");
const Label1 = heroSection.querySelectorAll(".formSection input");
const LabelStyle = heroSection.querySelectorAll(".formSection>div");
Label1[0].addEventListener("click", () => {
  moving("0");
});
Label1[1].addEventListener("click", () => {
  moving("1");
});

function moving(index) {
  if (show2 == true) {
    LabelStyle[index].classList.add("labelMove");
    show2 = false;
  } else {
    LabelStyle[index].classList.remove("labelMove");
    show2 = true;
  }
}

window.onclick = (e) => {
  if (e.target !== user) {
    userList.style.display = "none";
    show = true;
  }
  if (e.target == heroSection) {
    LabelStyle[0].classList.remove("labelMove");
    LabelStyle[1].classList.remove("labelMove");
    show2 = true;
  }
};

let movePosition = 1;
const trandingOfferBox = document.querySelector("#OfferSecion .offerBox ");
const leftArow = document.querySelector("#leftArow");

function RightFunc() {
  leftArow.style.opacity = "1";
  if (movePosition == 1) {
    trandingOfferBox.style.transform = "translateX(-347px)";
    movePosition = 2;
  } else if (movePosition == 2) {
    trandingOfferBox.style.transform = "translateX(-787px)";
    movePosition = 3;
  } else if (movePosition == 3) {
    trandingOfferBox.style.transform = "translateX(-1287px)";
    movePosition = 3;
  }
}

function LeftFunc() {
  if (movePosition == 3) {
    trandingOfferBox.style.transform = "translateX(-787px)";
    movePosition = 2;
  } else if (movePosition == 2) {
    trandingOfferBox.style.transform = "translateX(-347px)";
    movePosition = 1;
  } else if (movePosition == 1) {
    trandingOfferBox.style.transform = "translateX(0px)";
    movePosition = 1;
  }
}

const Menu = document.querySelector("#Menu");
const sideNave = document.querySelector("#SideNav");
let OpenMenU = 0;
const OpenMenu = () => {
  if (OpenMenU == 0) {
    // sideNave.style.display = "block";
    sideNave.style.position = "fixed";
    sideNave.style.left = "0%";
    OpenMenU = 1;
  } else {
    OpenMenU = 0;
    sideNave.style.position = "fixed";
    sideNave.style.left = "-100%";
    // sideNave.style.display = "none";
  }
};
Menu.addEventListener("click", OpenMenu);

// busRentalSection----------------------------------------

const busRentalDIv = document.querySelector("#busRentalDIv");
const underline = busRentalDIv.querySelector("#underline");
let tran = document.querySelector("#TrainBook");
let busbook = document.querySelector("#BusBook");
tran.style.opacity = "0";
busbook.style.transform = "translate(-10%)";

busRentalDIv.addEventListener("click", underlineApr);
let underLine = 0;
function underlineApr() {
  if (underLine == 0) {
    tran.style.opacity = "1";
    busbook.style.opacity = "0";
    underline.style.transform = "translate(100%)";
     busbook.style.transition = "all 1s";
     tran.style.transition = "all 1s";
    underLine = 1;
  } else {
    underline.style.transform = "translate(0%)";
    underLine = 0;
    tran.style.opacity = "0";
    busbook.style.opacity = "1";
    tran.style.transition = "all 1s";

  }
  busbook.style.transition = "all linear 1s";
}


