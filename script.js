// ===============================
// MOBILE NAVIGATION MENU
// ===============================

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


// ===============================
// CLOSE MENU WHEN LINK CLICKED
// ===============================

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(item => {
    item.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});


// ===============================
// STICKY HEADER ON SCROLL
// ===============================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 100) {
        header.style.background = "#1E3A8A";
        header.style.boxShadow = "0 5px 15px rgba(0,0,0,0.1)";
        header.style.transition = "0.4s";
    }
    else {
        header.style.background = "rgba(255,255,255,0.1)";
        header.style.boxShadow = "none";
    }

});


// ===============================
// ANIMATED COUNTER SECTION
// ===============================

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    counter.innerText = "0";

    const updateCounter = () => {

        const target = +counter.getAttribute("data-target");
        const current = +counter.innerText;

        const increment = target / 100;

        if (current < target) {

            counter.innerText = `${Math.ceil(current + increment)}`;

            setTimeout(updateCounter, 30);

        }
        else {
            counter.innerText = target;
        }

    };

    updateCounter();

});


// ===============================
// SCROLL ANIMATION
// ===============================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.2
});


// ELEMENTS TO ANIMATE

const hiddenElements = document.querySelectorAll(
    ".course-card, .learning-card, .faculty-card, .testimonial-card, .feature-box"
);

hiddenElements.forEach(el => {

    el.classList.add("hidden");

    observer.observe(el);

});


// ===============================
// SMOOTH BUTTON HOVER EFFECT
// ===============================

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "translateY(-4px)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "translateY(0px)";

    });

});


// ===============================
// HERO TEXT TYPING EFFECT
// ===============================

const heroTitle = document.querySelector(".hero-content h1");

const text = "Welcome to Sainik Institute";

let index = 0;

function typeEffect() {

    if (index < text.length) {

        heroTitle.innerHTML += text.charAt(index);

        index++;

        setTimeout(typeEffect, 80);

    }

}

// OPTIONAL:
// Uncomment below if you want typing effect

// heroTitle.innerHTML = "";
// typeEffect();


// ===============================
// IMAGE HOVER ZOOM EFFECT
// ===============================

const images = document.querySelectorAll(".faculty-card img, .about-image img");

images.forEach(image => {

    image.addEventListener("mouseover", () => {

        image.style.transform = "scale(1.05)";
        image.style.transition = "0.4s";

    });

    image.addEventListener("mouseout", () => {

        image.style.transform = "scale(1)";

    });

});


// ===============================
// BACK TO TOP BUTTON
// ===============================

// CREATE BUTTON

const topBtn = document.createElement("button");

topBtn.innerHTML = "?";

document.body.appendChild(topBtn);

// STYLE BUTTON

topBtn.style.position = "fixed";
topBtn.style.bottom = "30px";
topBtn.style.right = "30px";
topBtn.style.width = "50px";
topBtn.style.height = "50px";
topBtn.style.borderRadius = "50%";
topBtn.style.border = "none";
topBtn.style.background = "#2563EB";
topBtn.style.color = "white";
topBtn.style.fontSize = "22px";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.zIndex = "999";
topBtn.style.boxShadow = "0 5px 15px rgba(0,0,0,0.2)";

// SHOW/HIDE BUTTON

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    }
    else {

        topBtn.style.display = "none";

    }

});

// SCROLL TO TOP

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// ===============================
// PAGE LOADER
// ===============================

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});

document.body.style.opacity = "0";
document.body.style.transition = "opacity 0.5s ease-in-out";


// ===============================
// CONSOLE MESSAGE
// ===============================

console.log(
    "Sainik Institute Website Loaded Successfully!"
);