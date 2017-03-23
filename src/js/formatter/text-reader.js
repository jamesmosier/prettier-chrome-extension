import prettierFormat from './prettier-format';
import { replaceBetween } from '../utils';

export default async function(element) {
  const originalValue = element.value.trim();

  let newValue = originalValue;

  const occurances = newValue.match(/```js/g) || [];
  const charsPastStartingFence = 6;
  const charsPastEndingFence = 3;
  let lastEnding = 0;

  for (let occurance of occurances) {
    const startingIndex = newValue.indexOf('```js', lastEnding) + charsPastStartingFence;
    const endingIndex = newValue.indexOf('```', startingIndex);

    const jsCodeBlock = newValue.substring(startingIndex, endingIndex);
    lastEnding = endingIndex + charsPastEndingFence;

    const prettyJs = await prettierFormat(jsCodeBlock);
    newValue = replaceBetween(newValue, startingIndex, endingIndex, prettyJs);
  }

  element.value = newValue;
}
