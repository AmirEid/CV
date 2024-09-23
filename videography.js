document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.photo-button');
    const contents = document.querySelectorAll('.content');

    console.log(`Found ${buttons.length} buttons`);
    console.log(`Found ${contents.length} content sections`);

    // Select button and stop any playing video when switching content
    function selectButton(index) {
        console.log(`Selecting button at index: ${index}`);
        buttons.forEach((button, i) => {
            button.classList.remove('active');
        });
        contents.forEach((content, i) => {
            // Stop any playing videos when switching content
            const video = content.querySelector('video');
            if (video && !video.paused) {
                video.pause(); // Pause video
                video.currentTime = 0; // Reset to the beginning
            }
            content.style.display = 'none';
        });

        if (buttons[index]) {
            buttons[index].classList.add('active');
        }
        if (contents[index]) {
            contents[index].style.display = 'flex';
            console.log(`Displaying content at index: ${index}`);
        } else {
            console.log(`No content found at index: ${index}`);
        }
    }

function updateMainMedia(selectedMedia) {
        const contentBlock = selectedMedia.closest('.content'); // Find the closest parent content block
        const mainMedia = contentBlock.querySelector('.main-photo video, .main-photo iframe'); // Find the main video or iframe within the same block

        if (mainMedia && selectedMedia !== mainMedia) {
            // Swap the sources of the main video/iframe and the clicked carousel video/iframe
            if (mainMedia.tagName === 'IFRAME') {
                const newSrc = mainMedia.src;
                mainMedia.src = newSrc; // Reload iframe to stop it from playing
            }

            const tempSrc = mainMedia.src;
            mainMedia.src = selectedMedia.src;
            selectedMedia.src = tempSrc;

            // Swap the poster attributes if both elements are videos
            if (mainMedia.tagName === 'VIDEO' && selectedMedia.tagName === 'VIDEO') {
                const tempPoster = mainMedia.poster;
                mainMedia.poster = selectedMedia.poster;
                selectedMedia.poster = tempPoster;
            }

            // Handle controls for videos
            if (mainMedia.tagName === 'VIDEO') {
                mainMedia.setAttribute('controls', 'controls');
                if (selectedMedia.tagName === 'VIDEO') {
                    selectedMedia.removeAttribute('controls');
                }
            }

            // Handle attributes for iframes
            if (mainMedia.tagName === 'IFRAME') {
                mainMedia.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
                mainMedia.setAttribute('allowfullscreen', 'allowfullscreen');
                if (selectedMedia.tagName === 'IFRAME') {
                    selectedMedia.removeAttribute('allow');
                    selectedMedia.removeAttribute('allowfullscreen');
                }
            }
        }
    }

    // Attach event listeners to carousel videos/iframes
    const carouselMedias = document.querySelectorAll('.carousel-bar video, .carousel-bar iframe');
    carouselMedias.forEach(media => {
        media.addEventListener('click', function(event) {
            event.stopImmediatePropagation(); // Stop all other event handlers from being triggered
            event.preventDefault(); // Prevent default behavior (like opening a new tab)
            updateMainMedia(media); // Perform the media swap logic
        });
    });

    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
            selectButton(index);
        });
    });

    if (buttons.length > 0) {
        selectButton(0);
    }
});

// Add fade-out effect on page exit
window.addEventListener('beforeunload', function (event) {
    document.body.classList.add('fade-out');
});
