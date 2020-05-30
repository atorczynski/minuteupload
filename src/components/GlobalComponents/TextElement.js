import React from 'react';
import styled from '@emotion/styled';

const Paragraph = styled.p`
  color: #ddd;
  font-size: ${(props) => props.fontSize};
  font-weight: 700;
`;

export default function TextElement({ children, fontSize }) {
  return <Paragraph fontSize={fontSize}>{children}</Paragraph>;
}
