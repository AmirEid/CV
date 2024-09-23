// Fade-in effect when the page loads
window.onload = function() {
    document.body.classList.add('fade-in');
};

// Fade-out effect when the page unloads
window.onbeforeunload = function() {
    document.body.classList.add('fade-out');
};
