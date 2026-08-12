// Main JavaScript for Pranaclimb website

document.addEventListener('DOMContentLoaded', function() {
    // Initialize event listeners
    initializeButtons();
    initializeNavigation();
});

function initializeButtons() {
    const ctaButtons = document.querySelectorAll('.cta-button');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function() {
            console.log('Button clicked');
        });
    });
}

function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Smooth scrolling is handled by CSS scroll-behavior
        });
    });
}
