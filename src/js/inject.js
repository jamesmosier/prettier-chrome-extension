const textReader = require('./formatter/text-reader').default;

let targetElement = null;

document.addEventListener('contextmenu', event => {
  targetElement = event.target;
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message === 'firedFromBg') {
    const isInputText = targetElement.type === 'text';
    const isTextArea = targetElement.type === 'textarea';

    if (isInputText || isTextArea) {
      textReader(targetElement);
    }

    return true;
  }
});
