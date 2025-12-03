function isObject(value: any): value is Record<string, any> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

export const objectCompare = (obj1: any, obj2: any): boolean => {
  const keys = new Set([...Object.keys(obj1), ...Object.keys(obj2)]);

  for (const key of keys) {
    const val1 = obj1[key];
    const val2 = obj2[key];

    const areObjects = isObject(val1) && isObject(val2);

    if (areObjects) {
      if (objectCompare(val1, val2)) {
        return true;
      }
    } else if (val1 !== val2) {
      return true;
    }
  }

  return false;
};
