// Taustakuvat, jotka haluat vaihtaa
const images = [
    'url("DSC00360.jpg")', // Vaihda tämä kuvan poluksi
    'url("DSC00630.jpg")',
    'url("DSC00689.jpg")',
    'url("DSC00684.jpg")',
    'url("DSC00659.jpg")'
];

let currentImageIndex = 0; // Aloitetaan ensimmäisestä kuvasta

// Vaihdetaan taustakuvaa 7 sekunnin välein
setInterval(() => {
    // Määritetään hero-osion taustakuva
    document.querySelector('.hero').style.backgroundImage = images[currentImageIndex];

    // Siirrytään seuraavaan kuvaan
    currentImageIndex = (currentImageIndex + 1) % images.length; // Käytetään % jotta indeksin luku kiertää kuvien välillä
}, 10000); // 7000 millisekuntia = 7 sekuntia
// Get the modal
const modal = document.getElementById("contactModal");

// Get the button that opens the modal
const bookButton = document.getElementById("bookButton");

// Get the <span> element that closes the modal
const closeModal = document.getElementById("closeModal");

// When the user clicks the button, open the modal
bookButton.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default action
    modal.style.display = "flex"; // Show the modal in the center
});

// When the user clicks on <span> (x), close the modal
closeModal.addEventListener("click", function() {
    modal.style.display = "none"; // Hide the modal
});

// When the user clicks anywhere outside of the modal content, close it
window.addEventListener("click", function(event) {
    if (event.target === modal) {
        modal.style.display = "none"; // Hide the modal if the background is clicked
    }
});
