document.addEventListener("DOMContentLoaded", function () {
    // Mobile menu toggle
    document
        .getElementById("menu-toggle")
        .addEventListener("click", function () {
            document.getElementById("mobile-menu").classList.toggle("hidden");
        });

    new Typed(".typing-text", {
        strings: ["DevOps Engineer", "Software Developer", "Systems Architect"],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true,
    });

    // Particles.js configuration
    particlesJS("particles-js", {
        particles: {
            number: {
                value: 80,
                density: { enable: true, value_area: 800 },
            },
            color: { value: "#ffc569" },
            shape: { type: "circle" },
            opacity: { value: 0.5, random: true },
            size: { value: 3, random: true },
            line_linked: {
                enable: true,
                distance: 150,
                color: "#ffc569",
                opacity: 0.4,
                width: 1,
            },
            move: {
                enable: true,
                speed: 2,
                direction: "none",
                random: true,
                straight: false,
                out_mode: "out",
            },
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: { enable: true, mode: "grab" },
                onclick: { enable: true, mode: "push" },
            },
        },
    });

    // Scroll animations
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            });
        },
        { threshold: 0.1 }
    );

    document.querySelectorAll(".hidden-section").forEach((el) => {
        observer.observe(el);
    });
});
