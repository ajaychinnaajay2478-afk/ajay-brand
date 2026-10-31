// ==================================
// AJAY P. - PORTFOLIO JAVASCRIPT
// ==================================


// 1. Animated typing effect

const typingElement = document.getElementById("typing");

const words = [
    "ECE Student 🎓",
    "Cricket Lover 🏏",
    "Tech Explorer 💻",
    "Creative Thinker 💡"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (deleting) {
        charIndex--;
    } else {
        charIndex++;
    }

    typingElement.textContent = currentWord.substring(0, charIndex);

    let speed = deleting ? 45 : 85;

    if (!deleting && charIndex === currentWord.length) {
        deleting = true;
        speed = 1300;
    } else if (deleting && charIndex === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        speed = 350;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();


// 2. Create floating background particles

const particleContainer = document.getElementById("particles");

for (let i = 0; i < 45; i++) {

    const particle = document.createElement("span");

    particle.classList.add("particle");

    const size = Math.random() * 3 + 1;

    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;

    particle.style.left = `${Math.random() * 100}%`;

    particle.style.animationDuration =
        `${Math.random() * 15 + 10}s`;

    particle.style.animationDelay =
        `${Math.random() * 15}s`;

    // Alternate particle colors

    if (i % 3 === 0) {
        particle.style.background = "#ff4ecd";
        particle.style.boxShadow = "0 0 12px #ff4ecd";
    } else if (i % 3 === 1) {
        particle.style.background = "#a855f7";
        particle.style.boxShadow = "0 0 12px #a855f7";
    }

    particleContainer.appendChild(particle);
}


// 3. Mobile navigation menu

const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", () => {

    const isOpen = navbar.classList.toggle("open");

    menuToggle.textContent = isOpen ? "✕" : "☰";

    menuToggle.setAttribute("aria-expanded", String(isOpen));

});


// Close menu when a navigation link is clicked

navbar.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("open");

        menuToggle.textContent = "☰";

        menuToggle.setAttribute("aria-expanded", "false");

    });

});


// 4. Reveal cards when scrolling

const revealElements = document.querySelectorAll(
    ".about-card, .interest-card, .goal-card, " +
    ".skills-container, .contact-card, .quote-box"
);

if ("IntersectionObserver" in window) {

    const revealObserver = new IntersectionObserver((entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("revealed");

                observer.unobserve(entry.target);

            }

        });

    }, {
        threshold: 0.12
    });

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });

} else {

    revealElements.forEach(element => {
        element.classList.add("revealed");
    });

}


// 5. Animate skill bars when they appear

const skillSection = document.getElementById("skills");

const skillBars = document.querySelectorAll(".skill-progress");

if ("IntersectionObserver" in window) {

    const skillObserver = new IntersectionObserver((entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                skillBars.forEach(bar => {

                    bar.style.width = bar.dataset.width;

                });

                observer.unobserve(entry.target);

            }

        });

    }, {
        threshold: 0.3
    });

    skillObserver.observe(skillSection);

}


// 6. Back-to-top button

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        backToTop.classList.add("visible");

    } else {

        backToTop.classList.remove("visible");

    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// 7. Current year in footer

document.getElementById("year").textContent =
    new Date().getFullYear();


// 8. Update the browser tab title

document.title = "Ajay P. | Creative Portfolio";


// 9. Add a subtle 3D effect to the profile card on desktop

const profileCard = document.querySelector(".profile-card");

if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {

    const heroVisual = document.querySelector(".hero-visual");

    heroVisual.addEventListener("mousemove", event => {

        const rect = heroVisual.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const rotateY = ((x / rect.width) - 0.5) * 8;
        const rotateX = (0.5 - (y / rect.height)) * 8;

        profileCard.style.transform =
            `translateY(-5px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

    });

    heroVisual.addEventListener("mouseleave", () => {

        profileCard.style.transform = "";

    });

}


// 10. Set up your real social profile links here

// Replace these example URLs with your actual profile URLs.

const socialProfiles = {
    github: "",
    linkedin: ""
};

function configureSocialLink(elementId, profileUrl) {

    const link = document.getElementById(elementId);

    if (profileUrl.trim() !== "") {

        link.href = profileUrl;
        link.target = "_blank";
        link.rel = "noopener noreferrer";

    } else {

        link.href = "#contact";

        link.addEventListener("click", event => {

            event.preventDefault();

            alert("Add your actual social profile URL in script.js first.");

        });

    }

}

configureSocialLink("githubLink", socialProfiles.github);
configureSocialLink("linkedinLink", socialProfiles.linkedin);
