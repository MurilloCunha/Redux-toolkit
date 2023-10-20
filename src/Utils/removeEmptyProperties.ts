export function removeEmptyProperties(object: Record<any, any>) {
  const newObject = object;
  for (let prop in newObject) {
    if (newObject.hasOwnProperty(prop) && (newObject[prop] === null || newObject[prop] === undefined || newObject[prop] === '')) {
      delete newObject[prop];
    }
  }

  return newObject;
}