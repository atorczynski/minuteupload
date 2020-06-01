import React from 'react';
import styled from '@emotion/styled';
import { useDropzone } from 'react-dropzone';

import Arrow from './Arrow';
import TextElement from '../GlobalComponents/TextElement';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import PersonAddDisabledOutlinedIcon from '@material-ui/icons/PersonAddDisabledOutlined';
import AccessAlarmOutlinedIcon from '@material-ui/icons/AccessAlarmOutlined';
import UploadIcon from './UploadIcon';
import Button from '@material-ui/core/Button';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin: 50px auto;

  width: 50%;
  height: 600px;
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
  align-items: center;
  justify-content: center;
`;

const Label = styled.label`
  color: #999;
  font-size: 12px;
  text-align: center;
`;

const StyledForm = styled.form`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

const InputElement = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

const InputBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  width: 70%;

  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

const StyledButton = styled(Button)`
  margin: 20px 0 0 10px;
  width: 80%;
  border-color: #fff;
  color: #ddd;
  margin-top: 40px;

  :hover {
    background-color: #282828;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  background: #282828;
  margin: 0;
  padding: 0;
  height: 30px;
  @media (max-width: 576px) {
    width: 150px;
  }
`;

const StyledIcon = styled(LockOpenIcon)`
  color: black;
  background-color: #282828;
  text-align: center;
  padding-top: 5px;
  min-width: 30px;
  text-align: center;
`;
const StyledClockIcon = styled(AccessAlarmOutlinedIcon)`
  color: black;
  text-align: center;
  padding-top: 5px;
  min-width: 30px;
  text-align: center;
`;
const StyledUserIcon = styled(PersonAddDisabledOutlinedIcon)`
  color: black;
  text-align: center;
  padding-top: 5px;
  min-width: 30px;
  text-align: center;
`;

const StyledInput = styled.input`
  background: #282828;
  font-size: 14px;
  width: 100px;
  height: 30px;
  outline: none;
  border: none;
  @media (max-width: 576px) {
    width: 120px;
  }
`;

const TextWrapper = styled.div`
  height: 100px;
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
  return '#ddd';
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
      <TextElement textColor={'#ddd'}>
        Fast and Secure way to sent Files.
      </TextElement>
      <DropZone {...getRootProps({ isDragActive, isDragAccept, isDragReject })}>
        <input {...getInputProps()} />
        <UploadIcon />
      </DropZone>
      <TextWrapper>
        <TextElement fontSize={'14px'} textColor={'#ddd'}>
          Click the Box or Drag and Drop File into the Box.
        </TextElement>
      </TextWrapper>
      <StyledForm>
        <InputBox>
          <InputElement>
            <Label>File Password</Label>
            <InputWrapper>
              <StyledInput
                type={'text'}
                name={'filePassword'}
                placeholder={'optional'}
              />
              <StyledIcon />
            </InputWrapper>
          </InputElement>
          <InputElement>
            <Label>Max. Downloads</Label>
            <InputWrapper>
              <StyledInput
                type={'number'}
                name={'filePassword'}
                placeholder={'optional'}
              />
              <StyledUserIcon />
            </InputWrapper>
          </InputElement>
          <InputElement>
            <Label>Deletion After (minutes)</Label>
            <InputWrapper>
              <StyledInput
                type={'number'}
                min={'1'}
                max={'10'}
                data-toggle={'tooltip'}
                name={'deleteAfter'}
                placeholder={'required'}
                required
              />
              <StyledClockIcon />
            </InputWrapper>
          </InputElement>
        </InputBox>
        <StyledButton variant="outlined" type={'submit'}>
          Upload
        </StyledButton>
      </StyledForm>
    </Container>
  );
}
