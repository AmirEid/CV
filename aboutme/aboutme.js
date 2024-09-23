// Function to show the pop-up when a wallet is clicked
function showPopup(popupId, svgFile) {
  const popup = document.getElementById(popupId);
  const objectElement = popup.querySelector('object'); // Select the <object> element within the popup
  objectElement.data = svgFile; // Set the data attribute to the correct SVG file

  // Add an event listener to handle the SVG's load event
  objectElement.addEventListener('load', function() {
    // Access the SVG's content
    const svgDoc = objectElement.contentDocument;
    if (svgDoc) {
      const links = svgDoc.querySelectorAll('a');
      links.forEach(link => {
        link.setAttribute('target', '_blank');
      });
    }
  });

  popup.style.display = 'flex'; // Show the popup
}

// Function to close the pop-up when the close button is clicked
document.querySelectorAll('.close').forEach(closeBtn => {
  closeBtn.addEventListener('click', function() {
    this.closest('.popup').style.display = 'none';
  });
});

// Close pop-up when clicking outside the content
window.addEventListener('click', function(event) {
  if (event.target.classList.contains('popup')) {
    event.target.style.display = 'none';
  }
});

window.onload = function() {
  document.body.classList.add('fade-in');
};

// Fade-out effect when the page unloads
window.onbeforeunload = function() {
  document.body.classList.add('fade-out');
};


// Add event listeners to each wallet to trigger the correct pop-up and load the correct SVG
document.getElementById('wallet1').addEventListener('click', function() {
  showPopup('popup2', 'Articles.svg');
});

document.getElementById('wallet2').addEventListener('click', function() {
  showPopup('popup3', 'Awards.svg');
});

document.getElementById('wallet3').addEventListener('click', function() {
  showPopup('popup7', 'CV.svg');
});

document.getElementById('wallet4').addEventListener('click', function() {
  showPopup('popup5', 'Activism.svg');
});

document.getElementById('wallet5').addEventListener('click', function() {
  showPopup('popup1', 'Education.svg');
});

document.getElementById('wallet6').addEventListener('click', function() {
  showPopup('popup4', 'Reference.svg');
});

document.getElementById('wallet7').addEventListener('click', function() {
  showPopup('popup6', 'contacts.svg');
});

document.getElementById('wallet8').addEventListener('click', function() {
  showPopup('popup8', 'Languages.svg');
});