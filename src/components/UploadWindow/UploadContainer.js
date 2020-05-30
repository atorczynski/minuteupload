import React from 'react';
import styled from '@emotion/styled';
import { useDropzone } from 'react-dropzone';

import Arrow from './Arrow';
import TextElement from '../GlobalComponents/TextElement';
import SelectBox from '../GlobalComponents/SelectBox';
import UploadIcon from './UploadIcon';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  width: 520px;
  height: 520px;

  background: linear-gradient(90deg, #141e30 0%, #243b55 100%);
  mix-blend-mode: normal;
  border-radius: 25px;
`;

const DropZone = styled.div`
  display: flex;
  border: 1px solid white;
  border-radius: 25px;
  border-color: ${(props) => getColor(props)};
  width: 225px;
  height: 225px;
  margin: auto;
  align-items: center;
  justify-content: center;
`;

const CheckBoxContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 150px;
  height: 50px;
`;

const Label = styled.label`
  color: #ddd;
`;

const SelectContainer = styled.div`
  width: 200px;
  height: 30px;
  text-align: center;
`;

const getColor = (props) => {
  if (props.isDragAccept) {
    return '#00e676';
  }
  if (props.isDragReject) {
    return '#ff1744';
  }
  if (props.isDragActive) {
    return '#2196f3';
  }
  return '#eeeeee';
};
export default function UploadContainer() {
  const {
    getRootProps,
    acceptedFiles,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({ accept: 'image/*' });

  return (
    <Container>
      <DropZone {...getRootProps({ isDragActive, isDragAccept, isDragReject })}>
        <input {...getInputProps()} />
        <UploadIcon />
      </DropZone>
      <Arrow />
      <TextElement fontSize={'14px'}>
        Click the Box or Drag and Drop Images here.
      </TextElement>
      <SelectContainer>
        <SelectBox>
          <option value="1min">1 Minute</option>
          <option value="2min">2 Minutes</option>
          <option value="3min">3 Minutes</option>
          <option value="4min">4 Minutes</option>
          <option value="5min">5 Minutes</option>
        </SelectBox>
      </SelectContainer>
      <CheckBoxContainer>
        <Label>Private Upload?</Label>
        <input type="checkbox" />
      </CheckBoxContainer>
    </Container>
  );
}
