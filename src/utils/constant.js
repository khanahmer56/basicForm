export const allowOnlyNumbers = (e) => {
  e.target.value = e.target.value.replace(/[^0-9]/g, "");
};
export const allowOnlyAlphabets = (e) => {
  e.target.value = e.target.value.replace(/[^a-z]/gi, "");
};
export const allowOnlyAlphabetsSpace = (e) => {
  e.target.value = e.target.value.replace(/[^a-z\s]/gi, "");
};
export const allowOnlyUniqueAlphabetsNoSpace = (e) => {
  let last = e.target.value[e.target.value.length - 1];
  e.target.value = e.target.value.replace(/([a-zA-Z])\1\1/gi, last + last);
  if (last === " ") {
    e.target.value = e.target.value.replace("  ", " ");
  }
  if (last) {
    e.target.value = e.target.value.replace(/[^a-zA-Z ]/g, "");
  }
};
export const toCapitalize = (e) => {
  e.target.value = e.target.value[0].toUpperCase() + e.target.value.slice(1);
};
