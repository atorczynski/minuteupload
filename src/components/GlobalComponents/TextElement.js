import React from 'react';
import styled from '@emotion/styled';

const Paragraph = styled.p`
  color: ${(props) => props.textColor};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
`;

export default function TextElement({
  children,
  fontSize,
  textColor,
  fontWeight,
}) {
  return (
    <Paragraph
      fontSize={fontSize}
      textColor={textColor}
      fontWeight={fontWeight}
    >
      {children}
    </Paragraph>
  );
}
