import React, { useState } from 'react';
import { Label, Input } from '@rebass/forms';

import { Flex, Box } from '../components/box';
import { Card } from '../components/card';
import { Text } from '../components/typographies';
import { Button } from '../components/button';

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
      <Flex justifyContent="center" flex={1} mt={6}>
        <Card style={{ border: '1px solid black' }} p={2} width={256}>
          <Text fontSize={4}>{t('title')}</Text>
          <Box marginTop={2}>
            <Box>
              <Box mb={2}>
                <Label htmlFor="email">Participant</Label>
              </Box>
              <Input
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
        </Card>
      </Flex>
    </Box>
  );
};
