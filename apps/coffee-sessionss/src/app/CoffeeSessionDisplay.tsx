import React from 'react';
import { Text } from './components/typographies';
import { Box, FlexRow, FlexCol } from './components/box';

const emojis = [
  '😄','😃','😀','😊'
];

const randomEmoji = () => {
  return emojis[Math.floor(Math.random() * emojis.length)];
};

export const CoffeeSessionDisplay = (props: any) => (
  <Box mt="4rem">
    {!!props.coffeeSession.length && <Text> The Coffee Session will be </Text>}
    {props.coffeeSession.map((c: any) => (
      <FlexCol alignItems="center" justifyContent="space-around" height="4rem" mt="1rem" p="0.5rem" border="1px solid black" bgcolor="secondary.main" >
        <Text  style={{ color: 'white' }}>{randomEmoji()}</Text>
        <Text  style={{ color: 'white' }}>{c.one} </Text>
        <Text  style={{ color: 'white' }}>&</Text>
        <Text  style={{ color: 'white' }} key={c}>
          {c.two}
        </Text>
      </FlexCol>
    ))}
  </Box>
);
