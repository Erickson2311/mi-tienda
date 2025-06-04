// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});

// Scroll reveal animations
const elementsToShow = document.querySelectorAll('.feature-card, .game-card');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1
});

elementsToShow.forEach(el => {
    observer.observe(el);
});

// Optional: Toggle nav on mobile
const mobileToggle = document.querySelector('.mobile-toggle');
const navLinks = document.querySelector('.nav-links');

if (mobileToggle && navLinks) {
    mobileToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}
