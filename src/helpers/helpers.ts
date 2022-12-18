export function containsNumbers(str: string) {
  return /\d/.test(str);
}

export function isValidEmail(email: string) {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}

export function isValidTel(str: string) {
  return (/^\+[0-9]*$/.test(str) && str.length === 11) || str.length === 12;
}
