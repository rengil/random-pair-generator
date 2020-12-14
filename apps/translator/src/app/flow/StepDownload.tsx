import React from 'react';
import ReactJson from 'react-json-view';
import { TitleAndDescription, buttonClass } from '../components';

export const StepDownload = (props) => (
  <div
    style={{
      minWidth: '100%',
      maxWidth: '400',
      padding: 32,
    }}
    className="container text-center mt-4 mx-400"
  >
    <div className="mt-4" />

    <TitleAndDescription
      title="JSON DONE"
      description="You can download it! "
    />

    <ReactJson src={props.useFinishJson[0]} />
    <a
      href={`data:text/json;charset=utf-8,${encodeURIComponent(
        JSON.stringify(props.useFinishJson[0])
      )}`}
      download="output.json"
      className={buttonClass}
    >
      Download it
    </a>
  </div>
);
