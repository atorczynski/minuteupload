import React from 'react';
import styled from '@emotion/styled';
import ArrowUpwardOutlinedIcon from '@material-ui/icons/ArrowUpwardOutlined';

const StyledArrow = styled(ArrowUpwardOutlinedIcon)`
  position: relative;
  width: 60px;
  height: 60px;
  color: white;

  animation: arrowUp 2.5s infinite;
  @keyframes arrowUp {
    0% {
      top: 0px;
    }
    50% {
      top: -30px;
    }
    100% {
      top: 0px;
    }
  }
`;

export default function Arrow() {
  return <StyledArrow />;
}
