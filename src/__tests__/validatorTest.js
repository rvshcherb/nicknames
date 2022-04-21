import Validator from '../Validator';

test('name check', () => {
  const result = Validator.validateUsername('Vasya');
  expect(result).toBe('Vasya');
});

test.each(
  ['_vasya', 'vasya_', 'vasya999', 'vasya-', '99vasya99'],
)('test incorrect name: %s', (name) => {
  expect(() => Validator.validateUsername(name)).toThrow('Invalid nickname');
});
