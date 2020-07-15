import React from 'react';
import { Text } from '../components/typographies';
import { Box } from '../components/box';

export const ListOfPeople = ({ people }: any) => (
  <Box>
    <ul>
      {people.map((p: string) => (
        <li key={p}>
          <Text>{p}</Text>
        </li>
      ))}
    </ul>
  </Box>
);
