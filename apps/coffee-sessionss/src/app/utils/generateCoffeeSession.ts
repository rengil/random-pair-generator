import { shuffleList } from './shuffeList';

export const generateCoffeeSession = (entryPeople: string[]) => {
  const impars = [] as any;

  if (!entryPeople) return [];
  const pars = [] as any;
  const people = shuffleList(entryPeople);

  people.forEach((v: any, i: number) => {
    if (i % 2 === 0) {
      pars.push(v);
    } else {
      impars.push(v);
    }
  });

  const smallerLength =
    impars.length <= pars.length ? impars.length : pars.length;

  let iterate = 0;
  const returnes = [];

  while (iterate < smallerLength) {
    returnes.push({ one: pars[iterate], two: impars[iterate] });
    iterate += 1;
  }

  return returnes;
};
