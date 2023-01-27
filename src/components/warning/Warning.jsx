import React from 'react';
import './Warning.css';

export const Warning = ({ error }) => {
  return <span className='warning-text'>{error && 'Requerido'}</span>;
};
