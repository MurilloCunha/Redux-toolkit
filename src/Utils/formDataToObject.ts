import { removeEmptyProperties } from "./removeEmptyProperties";

export function formDataToObject(formData: FormData) {
  const formDataObject = Object.fromEntries(formData.entries());
  const cleanFormDataObject = removeEmptyProperties(formDataObject);

  return cleanFormDataObject;
}