export let trimObject: Function = (obj: { [key: string]: any }): void => {
  Object.keys(obj).forEach((key) => {
    if (typeof obj[key] === "string") {
      obj[key] = obj[key].trim();
    } else if (typeof obj[key] === "object") {
      trimObject(obj[key]);
    }
  });
}