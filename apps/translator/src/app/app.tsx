import React, { useCallback, useEffect, useState } from 'react';
import { addedDiff } from 'deep-object-diff';
import _ from 'lodash';
import { motion } from 'framer-motion';
import './app.scss';

import { ReactComponent as Logo } from './logo.svg';
import star from './star.svg';

import { Route, Link } from 'react-router-dom';
import { useDropzone } from 'react-dropzone';
import { type } from 'os';
import ReactJson from 'react-json-view';

const buttonClass =
  'py-2 px-4 bg-green-500 text-white font-semibold rounded-lg shadow-md focus:outline-none';

const buttonClass2 =
  'py-2 px-4 bg-pink-300 text-white font-semibold rounded-lg shadow-md focus:outline-none mr-2';

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

const TitleAndDescription = ({ title, description }) => {
  return (
    <>
      <h1 className="max-w-4xl text-green-500 my-6 font-spoof text-4xl md:text-5xl text-black leading-snug md:leading-extra-loose mx-auto tracking-tight text-center font-bold">
        {title}
      </h1>
      <p className="font-ttnorms text-gray-500 text-xl leading-relaxed text-center mb-3 mx-auto">
        {description}
      </p>
    </>
  );
};

const TitleAndDescription2 = ({ title, description }) => {
  return (
    <>
      <h1 className="max-w-4xl text-pink-500 my-6 font-spoof text-4xl md:text-5xl text-black leading-snug md:leading-extra-loose mx-auto tracking-tight text-center font-bold">
        {title}
      </h1>
      <p className="font-ttnorms text-gray-500 text-xl leading-relaxed text-center mb-3 mx-auto">
        {description}
      </p>
    </>
  );
};

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
    <>
      <TitleAndDescription
        title="Select your base language"
        description="For instance, you zu.json"
      />
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Base JSON</p>
        ) : (
          <div className="p-4 bg-white-300 text-black text-center font-extrabold flex items-center justify-center border-8 border-green-300">
            <p>Drag here</p>
          </div>
        )}
      </div>
    </>
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
    <>
      <TitleAndDescription2
        title="Now, Select your base language"
        description="For instance, you de.json"
      />
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Language Json</p>
        ) : (
          <div className="p-4 bg-white-300 text-black text-center font-extrabold flex items-center justify-center border-8 border-pink-300">
            <p>Drag here</p>
          </div>
        )}
      </div>
    </>
  );
};

export const Reveal: React.FC<{ isOpen: boolean }> = ({ children, isOpen }) => (
  <motion.div
    initial={{ opacity: 0 }}
    transition={{ duration: 0.3, delay: 0 }}
    animate={{
      height: isOpen ? 'auto' : 0,
      opacity: isOpen ? 1 : 0,
      y: isOpen ? 0 : -40,
      x: isOpen ? 0 : -40,
      pointerEvents: !isOpen ? 'none' : 'initial',
    }}
  >
    <motion.div transition={{ duration: 0.9, delay: 1 }}></motion.div>
    {children}
  </motion.div>
);

export const App = () => {
  const useBaseJson = useState();
  const useLanguageJson = useState();
  const useResultJson = useState();
  const useFinishJson = useState();
  const [step, goTo] = useState(1);

  const onDiff = () => {
    const newJson = addedDiff(useLanguageJson[0], useBaseJson[0]);

    useResultJson[1](newJson);
  };

  const onFinish = () => {
    const newJson = _.merge(useLanguageJson[0], useResultJson[0]);

    useFinishJson[1](newJson);
  };

  useEffect(() => {
    onDiff();
  }, [JSON.stringify(useBaseJson[0]), JSON.stringify(useLanguageJson[0])]);

  // return (
  //   <div className="container mx-auto">
  //     <EntryJson onUploadComplete={useBaseJson[1]} />
  //     <OutputJson onUploadComplete={useLanguageJson[1]} />
  //     <button className={buttonClass} onClick={onDiff}>
  //       merge
  //     </button>
  //     STRINGSTO
  //     <ReactJson
  //       src={useResultJson[0]}
  //       onEdit={({ updated_src }) => useResultJson[1](updated_src)}
  //     />
  //     <button className={buttonClass} onClick={onFinish}>
  //       merge
  //     </button>
  //     Your JSON
  //     <ReactJson src={useFinishJson[0]} />
  //   </div>
  // );

  const updateLanguageJsonAndMerge = (v) => {
    useLanguageJson[1](v);
    goTo(3);
  };

  return (
    <>
      <Reveal isOpen={step === 1}>
        <div
          style={{ minWidth: '100%', maxWidth: '400', padding: 32 }}
          className="container text-center mt-4 mx-400"
        >
          <div className="mt-4" />

          <EntryJson
            onUploadComplete={(v) => {
              useBaseJson[1](v);
              goTo(2);
            }}
          />
        </div>
      </Reveal>

      <Reveal isOpen={step === 2}>
        <div
          style={{ minWidth: '100%', maxWidth: '400', padding: 32 }}
          className="container text-center mt-4 mx-400"
        >
          <div className="mt-4" />

          <OutputJson onUploadComplete={updateLanguageJsonAndMerge} />
        </div>
      </Reveal>

      <Reveal isOpen={step === 3}>
        <div
          style={{ minWidth: '100%', maxWidth: '400', padding: 32 }}
          className="container text-center mt-4 mx-400"
        >
          <div className="mt-4" />

          <TitleAndDescription
            title="This is the strings you need to update"
            description="Update the translations then click generate output"
          />

          <ReactJson
            src={useResultJson[0]}
            onEdit={({ updated_src }) => useResultJson[1](updated_src)}
          />

          <a
            href={`data:text/json;charset=utf-8,${encodeURIComponent(
              JSON.stringify(useResultJson[0])
            )}`}
            download="diff.json"
            className={buttonClass2}
          >
            Download output
          </a>

          <button
            className={buttonClass}
            onClick={() => {
              onFinish();
              goTo(4);
            }}
          >
            Generate output
          </button>
        </div>
      </Reveal>

      <Reveal isOpen={step === 4}>
        <div
          style={{ minWidth: '100%', maxWidth: '400', padding: 32 }}
          className="container text-center mt-4 mx-400"
        >
          <div className="mt-4" />

          <TitleAndDescription
            title="JSON DONE"
            description="You can download it! "
          />

          <ReactJson src={useFinishJson[0]} />
          <a
            href={`data:text/json;charset=utf-8,${encodeURIComponent(
              JSON.stringify(useFinishJson[0])
            )}`}
            download="output.json"
            className={buttonClass}
          >
            Download it
          </a>
        </div>
      </Reveal>
    </>
  );
};

export default App;
