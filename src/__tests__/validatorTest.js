import Validator from '../Validator';

test.each(
  ['vasya', 'Vasya', 'vAsya', 'vAsYa', 'vasyA', 'va99sya', 'va-s-99-ya'],
)('test name: %s', (name) => {
  const result = Validator.validateUsername(name);
  expect(result).toBe(name);
});

test.each(
  ['_vasya', 'vasya_', 'vasya999', 'vasya-', '99vasya99', 'Яasya', 'VasЯ', 'åvsya'],
)('test incorrect name: %s', (name) => {
  expect(() => Validator.validateUsername(name)).toThrow('Invalid nickname');
});
