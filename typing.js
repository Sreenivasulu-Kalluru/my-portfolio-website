// * TYPING ANIMATION
const typingTextSpy = document.querySelector('.typing-text');
const words = [
  'Digital Experiences',
  'Web Applications',
  'Robust Solutions',
  'Creative UI/UX',
];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
  if (!typingTextSpy) return;

  const currentWord = words[wordIndex];
  const currentChar = currentWord.substring(0, charIndex);
  typingTextSpy.textContent = currentChar;
  typingTextSpy.classList.add('stop-blinking');

  if (!isDeleting && charIndex < currentWord.length) {
    // If condition is true, type the next character
    charIndex++;
    setTimeout(typeEffect, 100);
  } else if (isDeleting && charIndex > 0) {
    // If condition is true, remove the previous character
    charIndex--;
    setTimeout(typeEffect, 50);
  } else {
    // If word is deleted then switch to next word
    isDeleting = !isDeleting;
    typingTextSpy.classList.remove('stop-blinking');
    wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
    setTimeout(typeEffect, 1200);
  }
};

typeEffect();
