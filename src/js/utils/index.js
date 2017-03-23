export const replaceBetween = (originalValue, start, end, newValue) => {
  return originalValue.substring(0, start) + newValue + originalValue.substring(end);
};
