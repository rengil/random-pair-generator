import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';

import { Flex, Box } from '../components/box';
import { Card } from '../components/card';
import { Text } from '../components/typographies';
import { Button } from '../components/button';
import { Input } from '../components/input';

const t = (c: string) => {
  const translations = {
    caption: 'Add',
    title: 'Select a participant to be consider in the draw',
  } as any;

  return translations[c];
};

export const AddPersonCard = ({ onAdd }: any) => {
  const [name, setName] = useState();
  return (
    <Box
      as="form"
      onSubmit={(e: any) => {
        e.preventDefault();
        onAdd(name);
        setName('');
      }}
    >
       <Text variant="h1">{t('title')}</Text>
          <Box marginTop={2}>
            <Box>
              <Input 
                label="Participant"
                onChange={(e: any) => setName(e?.target?.value)}
                value={name}
                id="name"
                name="name"
                type="text"
                placeholder="Will take in place in withdraw"
              />
            </Box>
          </Box>
          <Box marginTop={4}>
            <Button variant="primary">{t('caption')}</Button>
          </Box>

    </Box>
  );
};
