const hoverButton = document.getElementById('hoverButton');
const hoverMessage = document.getElementById('hoverMessage');

hoverButton.addEventListener('mouseover', () => {
    hoverMessage.textContent = "Your a wizard harry";
});

hoverButton.addEventListener('mouseout', () => {
    hoverMessage.textContent = "Oh no you lost your broom";
});

const keyboardInput = document.getElementById('keyboardInput');
const keyMessage = document.getElementById('keyMessage');

keyboardInput.addEventListener('keyup', (event) => {
    keyMessage.textContent = `Last key pressed: ${event.key}`;
});