import prettier from 'prettier';
import _mapValues from 'lodash.mapvalues';
import getOptions from '../utils/get-options';

export default function prettierFormat(source) {
  return getOptions().then((opts) => {
    const options = Object.assign(...opts);

    const transformedOptions = _mapValues(options, (option) => {
      try {
        return JSON.parse(option);
      } catch(e) {
        return option;
      }
    });

    return prettier.format(source, transformedOptions);
  })
}
