import React, { useState } from 'react';
import { ThemeProvider } from 'emotion-theming';
import './App.css';
import { AddPersonCard } from './AddPersonCard';
import { ListOfPeople } from './ListOfPeople';
import { Button } from './components/button';
import { generateCoffeeSession } from './utils/generateCoffeeSession';
import { CoffeeSessionDisplay } from './CoffeeSessionDisplay';
import { Flex, Box } from './components/box';


export const space = [0, 4, 8, 16, 32, 64, 128, 256];

const theme = {
  breakpoints: ['40em', '52em', '64em'],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  colors: {
    primary: '#07c',
    secondary: '#fff',
    lightgray: '#f6f6ff',
    white: '#ffff',
  },
  space,
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace',
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
  shadows: {
    small: '0 0 4px rgba(0, 0, 0, .125)',
    large: '0 0 24px rgba(0, 0, 0, .125)',
  },
  variants: {},
  text: {},
  buttons: {
    primary: {
      color: 'white',
      bg: 'primary',
    },
  },
};

function App() {
  const [people, setPeople] = useState(['Renan', 'Flavia']) as any;
  const [coffeeSession, setCoffeeSession] = useState([]) as any;

  const handleAdd = (person: string) => {
    if (!people.includes(person)) {
      setPeople([...people, person]);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <AddPersonCard onAdd={handleAdd} />
      </div>

      <Flex flexDirection="column" alignItems="center">
        <Box mt={5}>
          <Button
            mt={4}
            onClick={() => setCoffeeSession(generateCoffeeSession(people))}
          >
            Generate
          </Button>
        </Box>
        <ListOfPeople people={people} />
        <CoffeeSessionDisplay coffeeSession={coffeeSession} />
      </Flex>
    </ThemeProvider>
  );
}

export default App;
