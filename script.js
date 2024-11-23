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

const myForm = document.getElementById('myForm');
const formMessage = document.getElementById('formMessage');

myForm.addEventListener('submit', (event) => {
    event.preventDefault();
    formMessage.textContent = "Mission Successful";
});

const focusBlurInput = document.getElementById('focusBlurInput');
const focusBlurMessage = document.getElementById('focusBlurMessage');

focusBlurInput.addEventListener('focus', () => {
    focusBlurMessage.textContent = "You are locked in";
});

focusBlurInput.addEventListener('blur', () => {
    focusBlurMessage.textContent = "Don't lose focus of the goal now silly";
});

const container = document.querySelector('.container');
const delegationMessage = document.getElementById('delegationMessage');

container.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
        delegationMessage.textContent = `You have chosen: ${event.target.textContent}`;
    }
});