document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.photo-button');
    const contents = document.querySelectorAll('.content');

    console.log(`Found ${buttons.length} buttons`);
    console.log(`Found ${contents.length} content sections`);

    function selectButton(index) {
        console.log(`Selecting button at index: ${index}`);
        buttons.forEach((button, i) => {
            button.classList.remove('active');
        });
        contents.forEach((content, i) => {
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

    let currentButtonIndex = 0;
    setInterval(() => {
        currentButtonIndex = (currentButtonIndex + 1) % buttons.length;
        selectButton(currentButtonIndex);
    }, 120000);

    function updateMainPhoto(selectedImage) {
        const mainPhoto = selectedImage.closest('.gallery').querySelector('.main-photo img');
        if (mainPhoto) {
            mainPhoto.src = selectedImage.src;
        }
    }

    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
            selectButton(index);
        });
    });

    const galleryImages = document.querySelectorAll('.gallery img');
    galleryImages.forEach(image => {
        image.addEventListener('click', () => {
            updateMainPhoto(image);
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