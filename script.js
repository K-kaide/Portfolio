document.addEventListener("DOMContentLoaded", function () {
  const profilePic = document.getElementById("profile-pic");
  const imagePaths = [
    "./assets/image.jpg",
    "./assets/me-1_edited.jpg",
    "./assets/me-3_edited.jpg",
    "./assets/me-4.jpg",
    "./assets/me-2_edited.jpg",
  ]; // Add paths to your images

  let currentIndex = 0;

  setInterval(function () {
    currentIndex = (currentIndex + 1) % imagePaths.length;
    profilePic.src = imagePaths[currentIndex];
  }, 2000); // Change image every 2 seconds
});

const typingTexts = [
  "Hi there!",
  "The Name's Jem💎",
  "Welcome to My Portfolio...",
]; // Define the texts to be typed
const typingDelay = 100; // Delay between typing each character
const newTextDelay = 2000; // Delay before changing to the next text

let textIndex = 0;
let charIndex = 0;

const typingHeader = document.getElementById("typing-header");

function type() {
  if (charIndex < typingTexts[textIndex].length) {
    typingHeader.textContent += typingTexts[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    typingHeader.textContent = typingTexts[textIndex].substring(
      0,
      charIndex - 1
    );
    charIndex--;
    setTimeout(erase, typingDelay);
  } else {
    textIndex++;
    if (textIndex >= typingTexts.length) {
      textIndex = 0;
    }
    setTimeout(type, typingDelay);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(type, typingDelay);
});
