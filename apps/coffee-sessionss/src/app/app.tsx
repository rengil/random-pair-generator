import React, { useState } from "react";
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from "styled-components";
import NoSsr from '@material-ui/core/NoSsr';
import "./app.scss";
import { AddPersonCard } from "./AddPersonCard";
import { ListOfPeople } from "./ListOfPeople";
import { Button } from "./components/button";
import { Text } from "./components/typographies";
import { generateCoffeeSession } from "./utils/generateCoffeeSession";
import { CoffeeSessionDisplay } from "./CoffeeSessionDisplay";
import { FlexCol, FlexRow } from "./components/box";

const theme = {
  typography: {
    p: {
      fontSize: 16,
      fontFamily: 'Lato'
    },
    h1: {
      fontSize: 72,
      fontFamily: 'Lato'
    },
    h2: {
      fontSize: 24,
      fontFamily: 'Lato'
    }
  },
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#FBDC4B',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      // light: will be calculated from palette.primary.main,
      main: '#3D82BB',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
  }
};

function App() {
  const [people, setPeople] = useState(["Renan", "Flavia", "Abra", "Goku"]) as any;
  const [coffeeSession, setCoffeeSession] = useState([]) as any;

  const handleAdd = (person: string) => {
    if(person && person.trim() !== '' && !people.includes(person)) {
      setPeople([...people, person]);
   }
  };

  const clearList = () => setPeople([])

  return (
    <NoSsr>
    <ThemeProvider theme={theme}>
        <FlexCol flexDirection="column" alignItems="center">
          <Text variant="h1">☕️</Text>
          <FlexRow>
          <AddPersonCard onAdd={handleAdd}/>
          <ListOfPeople clearList={clearList} people={people}/>
          </FlexRow>
          <Button mt="1rem" onClick={() => setCoffeeSession(generateCoffeeSession(people))}>Generate</Button>
           <CoffeeSessionDisplay coffeeSession={coffeeSession} />
        </FlexCol>
    </ThemeProvider>
    </NoSsr>
  );
}

export default App;
