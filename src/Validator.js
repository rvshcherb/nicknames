export default class Validator {
  static validateUsername(name) {
    const generalNameCheck = /^[a-zA-Z][a-zA-Z0-9_-]+[a-zA-Z]$/.test(name);
    const threeNumbersCheck = !/\d{3}/.test(name);

    if (generalNameCheck && threeNumbersCheck) {
      return name;
    }

    throw new Error('Invalid nickname');
  }
}
