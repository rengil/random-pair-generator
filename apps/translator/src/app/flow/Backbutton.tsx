import React from 'react';
import { motion } from 'framer-motion';

export const Backbutton = (props) => (
  <div
    style={{
      paddingLeft: 32,
    }}
  >
    <motion.p
      whileTap={{
        scale: 1.02,
      }}
      style={{
        opacity: props.step > 1 ? 1 : 0.5,
        cursor: 'pointer',
      }}
      onClick={() => {
        // eslint-disable-next-line no-unused-expressions
        props.step > 1 ? props.goTo(props.step - 1) : null;
      }}
    >
      <span aria-label="back" role="img">
        ⬅️
      </span>
    </motion.p>
  </div>
);
