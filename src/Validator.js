export default class Validator {
  static validateUsername(name) {
    const generalNameCheck = /^[^(0-9)_-][(a-z)-_]+[^(0-9)_-]$/.test(name);
    const threeNumbersCheck = !/\d{3}/.test(name);

    if (generalNameCheck && threeNumbersCheck) {
      return name;
    }

    throw new Error('Invalid nickname');
  }
}
