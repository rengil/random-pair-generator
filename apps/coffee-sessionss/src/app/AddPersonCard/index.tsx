import React, { useState } from 'react';
import { FlexCol, Box } from '../components/box';
import { Text } from '../components/typographies';
import { Button } from '../components/button';
import { Input } from '../components/input';
import zu from '../../translations/zu.json';

export const translate = (key) => _.get(zu, key);

const t = (c: string) => {
  const translations = {
    caption: 'Add',
    title: translate('title'),
    description:
      'The participant, together with others, will be sorted in pairs to attend the coffee',
  } as any;

  return translations[c];
};

export const AddPersonCard = ({ onAdd }: any) => {
  const [name, setName] = useState() as any;
  return (
    <FlexCol
      width="500px"
      alignItems="center"
      border="1px solid black"
      onSubmit={(e: any) => {
        e.preventDefault();
        onAdd(name);
        setName('');
      }}
    >
      <FlexCol
        width="420px"
        p="2rem"
        alignItems="flex-start"
        as="form"
        b="1"
        borderLeft="16px solid black"
        onSubmit={(e: any) => {
          e.preventDefault();
          onAdd(name);
          setName('');
        }}
      >
        <Text variant="h2">{t('title')}</Text>
        <Text mt="0.5rem" variant="p">
          {t('description')}
        </Text>
        <Box marginTop={2}>
          <Box>
            <Input
              disableUnderline={true}
              disableAnimation
              onChange={(e: any) => setName(e?.target?.value)}
              value={name}
              id="name"
              name="name"
              type="text"
              placeholder="Participant"
            />
          </Box>
        </Box>
        <Box marginTop={4}>
          <Button type="submit" disableRipple variant="primary">
            {t('caption')}
          </Button>
        </Box>
      </FlexCol>
    </FlexCol>
  );
};
