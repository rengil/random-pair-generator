import React, { useCallback, useState } from 'react';
import { addedDiff } from 'deep-object-diff';
import _ from 'lodash';

import './app.scss';

import { ReactComponent as Logo } from './logo.svg';
import star from './star.svg';

import { Route, Link } from 'react-router-dom';
import { useDropzone } from 'react-dropzone';
import { type } from 'os';
import ReactJson from 'react-json-view';

function difference(object, base) {
  function changes(object, base) {
    return _.transform(object, function (result, value, key) {
      if (!_.isEqual(value, base[key])) {
        result[key] =
          _.isObject(value) && _.isObject(base[key])
            ? changes(value, base[key])
            : value;
      }
    });
  }
  return changes(object, base);
}

const EntryJson = ({ onUploadComplete }) => {
  const onDrop = useCallback((files) => {
    const fr = new FileReader();

    fr.addEventListener('load', (e) => {
      onUploadComplete(JSON.parse(fr.result));
    });

    fr.readAsText(files[0]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? <p>Base JSON</p> : <p>Add here for example your zu</p>}
    </div>
  );
};

const OutputJson = ({ onUploadComplete }) => {
  const onDrop = useCallback((files) => {
    const fr = new FileReader();

    fr.addEventListener('load', (e) => {
      onUploadComplete(JSON.parse(fr.result));
    });

    fr.readAsText(files[0]);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Language Json</p>
      ) : (
        <p>Add here for example your de.json</p>
      )}
    </div>
  );
};

export const App = () => {
  const useBaseJson = useState();
  const useLanguageJson = useState();
  const useResultJson = useState();
  const useFinishJson = useState();

  const onDiff = () => {
    const newJson = addedDiff(useLanguageJson[0], useBaseJson[0]);

    useResultJson[1](newJson);
  };

  const onFinish = () => {
    const newJson = _.merge(useLanguageJson[0], useResultJson[0]);

    useFinishJson[1](newJson);
  };

  return (
    <>
      <EntryJson onUploadComplete={useBaseJson[1]} />
      <OutputJson onUploadComplete={useLanguageJson[1]} />
      <button onClick={onDiff}>merge</button>
      STRINGSTO
      <ReactJson
        src={useResultJson[0]}
        onEdit={({ updated_src }) => useResultJson[1](updated_src)}
      />
      <button onClick={onFinish}>merge</button>
      Your JSON
      <ReactJson src={useFinishJson[0]} />
    </>
  );
};

export default App;
