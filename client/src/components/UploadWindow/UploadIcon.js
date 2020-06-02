import React from 'react';
import styled from '@emotion/styled';
import CloudUploadOutlinedIcon from '@material-ui/icons/CloudUploadOutlined';

const Icon = styled(CloudUploadOutlinedIcon)`
  width: 60px;
  height: 60px;
  color: #ddd;
`;

export default function UploadIcon() {
  return <Icon />;
}
