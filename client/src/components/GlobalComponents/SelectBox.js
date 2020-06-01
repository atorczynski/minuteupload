import React from 'react';
import styled from '@emotion/styled';

const Select = styled.select`
  width: 100px;
  height: 25px;
  border-radius: 10px;
`;

export default function SelectBox({ children }) {
  return <Select>{children}</Select>;
}
