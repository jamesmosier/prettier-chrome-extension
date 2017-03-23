import '../css/options.scss';
import getOptions from './utils/get-options';
import defaultOptions from './utils/default-options';
import ChromePromise from 'chrome-promise';

const chromep = new ChromePromise();

const saveOptions = () => {
  const elements = document.querySelectorAll('.option-input');
  let updatedOptions = [];
  for (let i = 0; i < elements.length; i++) {
    const elem = elements[i];
    let optionValue = null;

    if (elem.type === 'select-one') {
      optionValue = elem.options[elem.selectedIndex].value;
    } else {
      optionValue = elem.value;
    }

    updatedOptions.push({
      [elem.id]: optionValue,
    });
  }

  chromep.storage.sync.set({ options: updatedOptions }).then(() => {
    // TODO: pop success message
    window.close();
  });
};

const getOptionsInit = () => {
  getOptions().then((options) => {
    if (!options.length) {
      // first time using the extension
      resetDefaults();
      return;
    }

    updateOptionsUI(options);
  });

};

const updateOptionsUI = (options) => {
  options.forEach((option) => {
    const key = Object.keys(option)[0];
    const inputElem = document.getElementById(key);

    if (inputElem) {
      inputElem.value = option[key];
    }
  });
};

const clearOptions = () => {
  chrome.storage.sync.clear(function() {
    var error = chrome.runtime.lastError;
    if (error) {
      console.error(error);
    }

    console.log('CLEAR OPTIONS')
  });
};

const resetDefaults = (e) => {
  if (e) {
    e.preventDefault();
  }

  chrome.storage.sync.set({ options: defaultOptions }, () => {
    // TODO: pop success message
    updateOptionsUI(defaultOptions);
    window.close()
  });
};

document.getElementById('save').addEventListener('click', saveOptions);

document.getElementById('reset-defaults').addEventListener('click', resetDefaults);

// development only
// document.getElementById('clear').addEventListener('click', clearOptions);

document.addEventListener('DOMContentLoaded', getOptionsInit);
