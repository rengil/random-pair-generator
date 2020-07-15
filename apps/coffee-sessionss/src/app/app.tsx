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
import { Flex, Box } from "./components/box";

const theme = {
  typography: {
    p: {
      fontSize: 16,
      fontFamily: 'Lato'
    }
  }
};

function App() {
  const [people, setPeople] = useState(["Renan", "Flavia"]) as any;
  const [coffeeSession, setCoffeeSession] = useState([]) as any;

  const handleAdd = (person: string) => {
    if (!people.includes(person)) {
      setPeople([...people, person]);
    }
  };

  return (
    <NoSsr>
    <ThemeProvider theme={theme}>
        <AddPersonCard onAdd={handleAdd}/>
        <ListOfPeople people={people}/>
        <Button onClick={() => setCoffeeSession(generateCoffeeSession(people))}>Generate</Button>
        <CoffeeSessionDisplay coffeeSession={coffeeSession} />
    </ThemeProvider>
    </NoSsr>
  );
}

export default App;
