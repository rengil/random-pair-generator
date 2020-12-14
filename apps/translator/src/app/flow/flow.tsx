import React, { useEffect, useState } from 'react';
import { addedDiff } from 'deep-object-diff';
import _ from 'lodash';

import { Reveal, EntryJson, OutputJson } from '../components';
import { StepUpdateStrings } from './StepUpdateStrings';
import { Backbutton } from './Backbutton';
import { StepDownload } from './StepDownload';

export const Flow = () => {
  const useBaseJson = useState();
  const useLanguageJson = useState();
  const useResultJson = useState();
  const useFinishJson = useState();
  const [step, goTo] = useState(1);

  const onDiff = () => {
    const newJson = addedDiff(useLanguageJson[0], useBaseJson[0]);

    useResultJson[1](newJson as any);
  };

  const onFinish = () => {
    const newJson = _.merge(useLanguageJson[0], useResultJson[0]);

    useFinishJson[1](newJson);
  };

  const updateLanguageJsonAndMerge = useUpdateResults(
    onDiff,
    useBaseJson,
    useLanguageJson,
    goTo
  );

  return (
    <>
      <Backbutton step={step} goTo={goTo}></Backbutton>
      <Reveal isOpen={step === 1}>
        <EntryJson
          onUploadComplete={(v) => {
            useBaseJson[1](v);
            goTo(2);
          }}
        />
      </Reveal>

      <Reveal isOpen={step === 2}>
        <OutputJson onUploadComplete={updateLanguageJsonAndMerge} />
      </Reveal>

      <Reveal isOpen={step === 3}>
        <StepUpdateStrings
          useResultJson={useResultJson}
          goTo={goTo}
          onFinish={onFinish}
        />
      </Reveal>

      <Reveal isOpen={step === 4}>
        <StepDownload useFinishJson={useFinishJson} />
      </Reveal>
    </>
  );
};

function useUpdateResults(
  onDiff: () => void,
  useBaseJson: [undefined, React.Dispatch<(prevState: undefined) => undefined>],
  useLanguageJson: [
    undefined,
    React.Dispatch<(prevState: undefined) => undefined>
  ],
  goTo: React.Dispatch<React.SetStateAction<number>>
) {
  useEffect(() => {
    onDiff();
  }, [JSON.stringify(useBaseJson[0]), JSON.stringify(useLanguageJson[0])]);

  const updateLanguageJsonAndMerge = (v) => {
    useLanguageJson[1](v);
    goTo(3);
  };
  return updateLanguageJsonAndMerge;
}
