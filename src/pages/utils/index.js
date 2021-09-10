const isFalsy = (value) => (value === 0 ? value : !value);

export const cleanObj = (obj) => {
  const result = Object.create(null);
  Object.keys(obj).forEach((key) => {
    const value = obj[key];
    if (!isFalsy(value)) {
      result[key] = value;
    }
  });
  return result;
};
