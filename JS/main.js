// Header Fixed

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        header.classList.add("fixed");
    } else {
        header.classList.remove("fixed");
    }
})


// Responsive Header Links

const navMenu = document.querySelector(".navMenu");
const nav = document.querySelector("nav");
const links = document.querySelectorAll("nav li a");
navMenu.addEventListener("click", () => {
    if (!nav.classList.contains("show-nav")) {
        nav.classList.add("show-nav");
        navMenu.classList.add("active");
    } else {
        nav.classList.remove("show-nav");
        navMenu.classList.remove("active");
    }
})

links.forEach((link) => {
    link.addEventListener("click", () => {
        nav.classList.remove("show-nav");
        navMenu.classList.remove("active");
    })
})

// feature tab

const tabs = document.querySelectorAll(".tablink");
const contents = document.querySelectorAll(".tab-content");

tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
        contents.forEach((contant) => {
            contant.classList.remove("tab-content-active");
        })
        tabs.forEach((tab) => {
            tab.classList.remove("tablink-active");
        })
        contents[index].classList.add("tab-content-active");
        tabs[index].classList.add("tablink-active");
    })
})

// Reviews

const slider = document.querySelectorAll(".owl-stage");
let count = 0;

const myInterval = setInterval(myFunction, 4000);

function myFunction() {
    if (slider.length > count) {
        count++;
        slider.forEach((slide) => {
            slide.style.transform = `translateX(-${count * 100}%)`
        })
        if (count === slider.length - 1) {
            count = -1;
        }
    }
}


// Price boxes
const monthlyBoxes = document.querySelectorAll(".monthly-boxes .box");
const yearlyBoxes = document.querySelectorAll(".yearly-boxes .box");
const monthBtn = document.querySelector(".monthly");
const yearBtn = document.querySelector(".yearly");

yearBtn.addEventListener("click", () => {
    for (let i = 0; i < yearlyBoxes.length; i++) {
        yearlyBoxes[i].classList.add("price-box-active");
    }
    for (let i = 0; i < monthlyBoxes.length; i++) {
        monthlyBoxes[i].classList.remove("price-box-active");
    }
    yearBtn.classList.add("price-tab-active");
    monthBtn.classList.remove("price-tab-active");
})

monthBtn.addEventListener("click", () => {
    for (let i = 0; i < yearlyBoxes.length; i++) {
        yearlyBoxes[i].classList.remove("price-box-active");
    }
    for (let i = 0; i < monthlyBoxes.length; i++) {
        monthlyBoxes[i].classList.add("price-box-active");
    }
    yearBtn.classList.remove("price-tab-active");
    monthBtn.classList.add("price-tab-active");
})

// faq
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}

// Footer Year
var footerYear = document.querySelector(".footer-year");
const d = new Date();
let year = d.getFullYear();
footerYear.innerHTML = year;

// Back To Top

var topBtn = document.querySelector(".back-to-top");
window.onscroll = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topBtn.classList.add("open");
    } else {
        topBtn.classList.remove("open");
    }
};

topBtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})