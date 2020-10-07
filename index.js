const opennavhamburger = document.querySelector(".nav__mob");
const closenavhamburger = document.querySelector(".nav__mob2");
const navbackground = document.querySelector(".nav__mobile-background");
const navdropdown = document.querySelector(".nav__links-dropdown");
const navdropdownitems = document.querySelector(".nav__subitems-main");
const navdropdownmobile = document.querySelector(".nav__mobile-links-edit");
const navdropdownmobilecontrol = document.getElementById("nav__subitems-main-2-control");
const sidenav = document.querySelector(".nav__mobile");

//When link is clicked
const allnavitems = document.querySelectorAll(".nav__mobile-links");


opennavhamburger.addEventListener("click", showNav);
closenavhamburger.addEventListener("click", hideNav);
navdropdown.addEventListener("click", navDrop);
navdropdownmobile.addEventListener("click", navDropmobile);

function showNav(event) {
    sidenav.style.transform = "translateX(0)";
    navbackground.style.opacity = "1";
    navbackground.style.visibility = "visible";
}

function hideNav(event) {
    sidenav.style.transform = "translateX(100%)";
    navbackground.style.opacity = "0";
    navbackground.style.visibility = "hidden";
}

function navDropmobile(event) {
    navdropdownmobilecontrol.classList.toggle("nav__subitems-main-2");
}

function navDrop(event) {
    navdropdownitems.style.transform = "scale(1)";
}

//When link is clicked
allnavitems.forEach(allnavitem => {
    allnavitem.addEventListener("click", closenav)
});

function closenav(event) {
    console.log("worked");
    sidenav.removeAttribute("style");
    navbackground.removeAttribute("style");
}


const nav = document.querySelector(".nav");
const container = document.querySelector(".container");
const navButton = document.querySelector(".nav__btn");
const navmob = document.querySelector(".nav__mob");

window.addEventListener('scroll', () => {
    var {
        scrollTop,
        scrollHeight,
        clientHeight
    } = document.documentElement;
    //    console.log({
    //        scrollTop,
    //        scrollHeight,
    //        clientHeight
    //    })
    var one = 204;
    var two = 543;
    if (scrollTop > one) {
        if (scrollTop > one && scrollTop < two) {
            container.classList.add("container-fixed");
            navButton.classList.add("nav__btn-1");
            nav.style.position = "fixed";
            nav.style.background = "white";
            nav.style.color = "black";
            navmob.style.background = "black";
        } else {
            container.classList.add("container-fixed");
            nav.style.position = "fixed";
            nav.style.background = "black";
            nav.style.color = "white";
            navmob.style.background = "white";
        }
    } else {
        container.classList.remove("container-fixed");
        navButton.classList.remove("nav__btn-1");
        nav.removeAttribute("style");
    }
});


$(document).click(function (event) {
    if (!$(event.target).closest(".nav__subitems-main, .nav__links-dropdown").length) {
        const found = $("body").find(".nav__subitems-main")
        found.removeAttr("style");
    }
});


//////////////////////////////////////
//Hide main subnav when clicked

const navdropdownhides = document.querySelectorAll(".nav__sublink");

navdropdownhides.forEach(navdropdownhide => {
    navdropdownhide.addEventListener("click", hidemainsubnav);
});

function hidemainsubnav(event) {
    console.log("Prick");
    navdropdownitems.removeAttribute("style");
}
