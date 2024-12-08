// Select elements
const jsText = document.getElementById('jsText');
const subtitleText = document.getElementById('subtitleText');
const changeTextButton = document.getElementById('changeTextButton');
const characterImage = document.getElementById('characterImage');

// Original text
const originalJsText = 'JavaScript';
const originalSubtitleText = 'Make your Dreams return True';

// Changed text
const changedJsText = 'JS';
const changedSubtitleText = 'Unlock your potential with JS!';

// State to track if text is changed
let isChanged = false;

// Function to toggle text dynamically
function changeText() {
    if (!isChanged) {
        jsText.textContent = changedJsText;  // Change the JS text
        subtitleText.textContent = changedSubtitleText;  // Change the subtitle
    } else {
        jsText.textContent = originalJsText;  // Revert to original JS text
        subtitleText.textContent = originalSubtitleText;  // Revert to original subtitle
    }
    // Toggle the state
    isChanged = !isChanged;
}

// Add event listener to the button for single click
changeTextButton.addEventListener('click', changeText);
