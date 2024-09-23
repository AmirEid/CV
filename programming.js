function openModal(modalId) {
    // Get the modal element by ID
    const modal = document.getElementById(modalId);
    
    // Display the modal
    modal.style.display = 'block';
}

function closeModal(modalId) {
    // Get the modal element by ID
    const modal = document.getElementById(modalId);
    
    // Hide the modal
    modal.style.display = 'none';
}

// Fade in/out on login/logout
window.addEventListener('load', () => {
    document.body.classList.add('fade-in');
});

window.addEventListener('beforeunload', () => {
    document.body.classList.add('fade-out');
});

// Make sticky notes draggable
document.querySelectorAll('.sticky-note').forEach(note => {
    let isDragging = false;

    note.addEventListener('mousedown', function(e) {
        let shiftX = e.clientX - note.getBoundingClientRect().left;
        let shiftY = e.clientY - note.getBoundingClientRect().top;

        function moveAt(pageX, pageY) {
            note.style.left = pageX - shiftX + 'px';
            note.style.top = pageY - shiftY + 'px';
        }

        function onMouseMove(event) {
            isDragging = true;
            moveAt(event.pageX, event.pageY);
        }

        document.addEventListener('mousemove', onMouseMove);

        note.addEventListener('mouseup', function() {
            document.removeEventListener('mousemove', onMouseMove);
            isDragging = false;
        });

        document.addEventListener('mouseup', function() {
            document.removeEventListener('mousemove', onMouseMove);
            isDragging = false;
        });

        note.ondragstart = function() {
            return false;
        };
    });

    note.addEventListener('dblclick', function(e) {
        if (!isDragging) {
            openModal(note.querySelector('.sticky-note-title').innerText);
        }
    });
});