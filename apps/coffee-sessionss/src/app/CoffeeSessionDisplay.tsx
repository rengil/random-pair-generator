import React from 'react';
import { Text } from './components/typographies';
import { Box } from './components/box';
import { Card } from './components/card';

export const CoffeeSessionDisplay = (props: any) => (
  <Box>
    <Text> The Coffee Session will be </Text>
    {props.coffeeSession.map((c: any) => (
      <Card
        mt={2}
        style={{ backgroundColor: '#07c', borderRadius: 4 }}
        p={4}
        maxWidth={300}
        maxHeight={300}
        key={c}
      >
        <Text color="textSecondary">{c.one} & </Text>
        <Text color="textSecondary" key={c}>
          {c.two}
        </Text>
      </Card>
    ))}
  </Box>
);
