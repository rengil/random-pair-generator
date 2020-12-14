import React, { useCallback } from 'react';
import _ from 'lodash';
import { motion } from 'framer-motion';
import '../app.scss';

import { useDropzone } from 'react-dropzone';

export const buttonClass =
  'py-2 px-4 bg-green-500 text-white font-semibold rounded-lg shadow-md focus:outline-none';

export const buttonClass2 =
  'py-2 px-4 bg-pink-300 text-white font-semibold rounded-lg shadow-md focus:outline-none mr-2';

export const TitleAndDescription = ({ title, description }) => {
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

export const TitleAndDescription2 = ({ title, description }) => {
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

export const EntryJson = ({ onUploadComplete }) => {
  const onDrop = useCallback((files) => {
    const fr = new FileReader();

    fr.addEventListener('load', (e) => {
      onUploadComplete(JSON.parse(fr.result));
    });

    fr.readAsText(files[0]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div
      style={{ minWidth: '100%', maxWidth: '400', padding: 32 }}
      className="container text-center mt-4 mx-400"
    >
      <div className="mt-4" />

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
    </div>
  );
};

export const OutputJson = ({ onUploadComplete }) => {
  const onDrop = useCallback((files) => {
    const fr = new FileReader();

    fr.addEventListener('load', (e) => {
      onUploadComplete(JSON.parse(fr.result));
    });

    fr.readAsText(files[0]);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div
      style={{ minWidth: '100%', maxWidth: '400', padding: 32 }}
      className="container text-center mt-4 mx-400"
    >
      <div className="mt-4" />

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
    </div>
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
