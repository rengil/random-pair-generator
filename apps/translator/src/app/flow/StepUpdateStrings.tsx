import React from 'react';
import ReactJson from 'react-json-view';
import { TitleAndDescription, buttonClass2, buttonClass } from '../components';

export const StepUpdateStrings = (props) => (
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
      title="This is the strings you need to update"
      description="Update the translations then click generate output"
    />

    <ReactJson
      src={props.useResultJson[0]} // eslint-disable-next-line @typescript-eslint/camelcase
      onEdit={({ updated_src }: any) => props.useResultJson[1](updated_src)}
    />

    <a
      href={`data:text/json;charset=utf-8,${encodeURIComponent(
        JSON.stringify(props.useResultJson[0])
      )}`}
      download="diff.json"
      className={buttonClass2}
    >
      Download output
    </a>

    <button
      className={buttonClass}
      onClick={() => {
        props.onFinish();
        props.goTo(4);
      }}
    >
      Generate output
    </button>
  </div>
);
