import _get from 'lodash.get';
import defaultOptions from './default-options';
import ChromePromise from 'chrome-promise';

export default function getOptions() {
  const chromep = new ChromePromise();

  return chromep.storage.sync.get('options').then((items) => {
    const options = _get(items, 'options', []);

    if (!options.length) {
      // first time using the extension
      return defaultOptions;
    }

    return options;
  });
}
