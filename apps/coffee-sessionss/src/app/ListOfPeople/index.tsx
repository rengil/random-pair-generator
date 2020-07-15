import React from 'react';
import { Text } from '../components/typographies';
import { FlexCol } from '../components/box';

export const ListOfPeople = ({ people, clearList }: any) => (
  <FlexCol pl="2rem" alignItems="center">
   {!!people.length && <div style={{ cursor: 'pointer' }}onClick={clearList}>
         ∅
    </div>}
    <ul>
      {people.map((p: string) => (
        <li key={p}>
          <Text variant="h2">{p}</Text>
        </li>
      ))}
    </ul>
  </FlexCol>
);
