function navigateToPage(url) {
    // Add slide-left and fade-out classes to all rectangles
    document.querySelectorAll('.rectangle').forEach(rect => {
        rect.classList.add('slide-left');
    });

    // Add fade-out class to body to create fade-out effect
    document.body.classList.add('fade-out');

    // Delay navigation to allow animations to complete
    setTimeout(() => {
        window.location.href = url;
    }, 1000); // 1 second delay to match the animation duration
}

document.addEventListener('DOMContentLoaded', function() {
    const rectangles = document.querySelectorAll('.rectangle');

    rectangles.forEach(rectangle => {
        const video = rectangle.querySelector('video');
        if (video) {
            video.pause(); // Ensure the video is paused by default

            rectangle.addEventListener('mouseenter', () => {
                video.play();
                video.loop = true;
            });

            rectangle.addEventListener('mouseleave', () => {
                video.pause();
            });
        }
    });
});
