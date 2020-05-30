import React from 'react';
import UploadContainer from '../components/UploadWindow/UploadContainer';
import Arrow from '../components/UploadWindow/Arrow';

export default {
  title: 'Upload Container',
};

export const UploadBox = () => {
  return <UploadContainer></UploadContainer>;
};

export const UpArrow = () => {
  return <Arrow />;
};
