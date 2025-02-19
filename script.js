// Enhanced Intersection Observer for all animations
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                if (entry.target.classList.contains("card-transition")) {
                    entry.target.classList.add("card-visible");
                }
            }
        });
    },
    {
        threshold: 0.1,
        rootMargin: "0px",
    }
);

// Observe all animated elements
document
    .querySelectorAll(
        ".fade-in, .slide-in-left, .slide-in-right, .card-transition"
    )
    .forEach((el) => {
        observer.observe(el);
    });

// Enhanced tab switching function
function switchCardTab(tabName) {
    // Hide all tab panels
    document.querySelectorAll(".tab-panel").forEach((panel) => {
        panel.classList.add("hidden");
    });

    // Reset all tab buttons
    document.querySelectorAll('button[id$="Button"]').forEach((button) => {
        button.classList.remove(
            "text-blue-400",
            "border-b-2",
            "border-blue-400"
        );
        button.classList.add("text-gray-400");
    });

    // Show selected tab panel
    const selectedPanel = document.getElementById(tabName + "Content");
    selectedPanel.classList.remove("hidden");

    // Reset and trigger card animations
    const cards = selectedPanel.querySelectorAll(".card-transition");
    cards.forEach((card, index) => {
        card.classList.remove("card-visible");
        setTimeout(() => {
            card.classList.add("card-visible");
        }, index * 100); // Staggered animation
    });

    // Highlight selected tab button
    const selectedButton = document.getElementById(tabName + "Button");
    selectedButton.classList.remove("text-gray-400");
    selectedButton.classList.add(
        "text-blue-400",
        "border-b-2",
        "border-blue-400"
    );
}

// Initialize skill bars
function initializeSkillBars() {
    document.querySelectorAll(".skill-bar").forEach((bar) => {
        setTimeout(() => {
            bar.style.width = bar.dataset.width;
        }, 500);
    });
}

// Initialize the page
document.addEventListener("DOMContentLoaded", () => {
    initializeSkillBars();
    // Initialize first tab
    switchCardTab("tab1");
});
