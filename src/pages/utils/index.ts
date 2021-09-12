const isFalsy = (value: unknown): boolean => (value === 0 ? false : !value);

export const cleanObj = <T extends {}>(obj: T) => {
  const result: T = Object.create(null);
  Object.keys(obj).forEach((key) => {
    const value = obj[key as keyof T];
    if (!isFalsy(value)) {
      result[key as keyof T] = value;
    }
  });
  return result;
};
