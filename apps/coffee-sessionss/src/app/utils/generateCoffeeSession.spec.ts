import { generateCoffeeSession } from './generateCoffeeSession';
import { shuffleList } from './shuffeList';

jest.mock('./shuffeList', () => ({
  shuffleList: jest.fn((l: any) => l),
}));

it('exists', () => {
  expect(generateCoffeeSession).toBeDefined();
});

it('returns [] if param is undefied', () => {
  expect(generateCoffeeSession()).toEqual([]);
});

it('returns [] if param is empty array', () => {
  expect(generateCoffeeSession([])).toEqual([]);
});

it('returns [] if only one person', () => {
  expect(generateCoffeeSession(['renan'])).toEqual([]);
});

it('returns with one content if 2 people', () => {
  const array = ['renan', 'rodrigo'];
  const returnes = generateCoffeeSession(['renan', 'rodrigo']);

  const firstOne = returnes[0].one;
  const firstTwo = returnes[0].two;

  expect(firstOne).toBeOneOf(array);
  const withoutFirstResult = array.filter((a) => a !== firstOne);
  expect(firstTwo).toBeOneOf(withoutFirstResult);
});

it('returns correct in case of 3 people', () => {
  const array = ['renan', 'rodrigo', 'bruna'];
  const returnes = generateCoffeeSession(['renan', 'rodrigo', 'bruna']);

  const firstOne = returnes[0].one;
  const firstTwo = returnes[0].two;

  expect(firstOne).toBeOneOf(array);
  const withoutFirstResult = array.filter((a) => a !== firstOne);
  expect(firstTwo).toBeOneOf(withoutFirstResult);
});

it('returns correct in case of 4 people', () => {
  const array = ['renan', 'rodrigo', 'bruna', 'tobi'];
  const returnes = generateCoffeeSession(array);

  const firstOne = returnes[0].one;
  const firstTwo = returnes[0].two;

  expect(firstOne).toBeOneOf(array);
  const withoutFirstResult = array.filter((a) => a !== firstOne);
  expect(firstTwo).toBeOneOf(withoutFirstResult);

  const secondOne = returnes[1].one;
  const withoutFirstTwo = withoutFirstResult.filter((a) => a !== firstTwo);

  expect(secondOne).toBeOneOf(withoutFirstTwo);
  const withoutFirstTwoAndSecondOne = withoutFirstResult.filter(
    (a) => a !== secondOne
  );
  const secondTwo = returnes[1].two;

  expect(secondTwo).toBeOneOf(withoutFirstTwoAndSecondOne);
});

it('calls random of list in the begining', () => {
  jest.clearAllMocks();
  const array = ['renan', 'rodrigo', 'bruna', 'tobi'];
  generateCoffeeSession(array);

  expect(shuffleList).toHaveBeenCalledWith([
    'renan',
    'rodrigo',
    'bruna',
    'tobi',
  ]);
});
