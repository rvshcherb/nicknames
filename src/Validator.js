export default class Validator {
  static validateUsername(name) {
    const generalNameCheck = /^[^(0-9)(а-яА-Я)_-][a-zA-Z0-9-_]+[^(0-9)(а-яА-Я)_-]$/.test(name);
    const threeNumbersCheck = !/\d{3}/.test(name);

    if (generalNameCheck && threeNumbersCheck) {
      return name;
    }

    throw new Error('Invalid nickname');
  }
}
