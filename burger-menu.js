document.addEventListener("DOMContentLoaded", function() {
    // Select all rectangles
    const rectangles = document.querySelectorAll('rec_head');

    // Add click event listener to each rectangle
    rectangles.forEach(rectangle => {
        rectangle.addEventListener('click', () => {
            // Start the exit animation
            startExitAnimation();
        });
    });
});

function startExitAnimation() {
    // Select all rectangles again in case they were modified dynamically
    const rectangles = document.querySelectorAll('rec_head');

    // Add class to all rectangles for exit animation
    rectangles.forEach(rec_head => {
        rectangle.classList.add('exit-left');
    });

    // After the animation, fade out the page
    setTimeout(() => {
        document.body.style.transition = 'opacity 1s ease';
        document.body.style.opacity = '0';
    }, 300); // Wait for the rectangles to start moving before fading out

    // Redirect to a new page after the fade-out completes
    setTimeout(() => {
        window.location.href = 'new-page.html'; // Change this URL to the target page
    }, 1300); // Total of exit animation and fade-out time
}
