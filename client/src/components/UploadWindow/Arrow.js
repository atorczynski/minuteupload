import React from 'react';
import styled from '@emotion/styled';
import ArrowUpwardOutlinedIcon from '@material-ui/icons/ArrowUpwardOutlined';

const StyledArrow = styled(ArrowUpwardOutlinedIcon)`
  position: relative;
  width: 40px;
  height: 40px;
  color: white;

  animation: arrowUp 2s infinite;
  @keyframes arrowUp {
    0% {
      top: -10px;
    }
    50% {
      top: -35px;
    }
    100% {
      top: -10px;
    }
  }
`;

export default function Arrow() {
  return <StyledArrow />;
}
