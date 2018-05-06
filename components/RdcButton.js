import React from 'react';
import styles from '../styles/buttons-working';


const RdcButton = ({ children, ...rest }) => (
  <button className="rdc-btn" {...rest}>
    <style jsx>{styles}</style>
    {children}
  </button>
);

export default RdcButton;
