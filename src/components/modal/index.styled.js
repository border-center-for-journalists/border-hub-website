import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  background-color: rgba(0,0,0,0.75);
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalStyled = styled.div`
  max-width: 50%;
  position: relative;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: -12px;
  right: -12px;
  background-color: #FFF200;
  border: none;
  border-radius: 100%;
  width: 25px;
  height: 25px;
  cursor: pointer;

  img {
    margin: 0 !important;
  }
`;


export default {
  Overlay,
  ModalStyled
};
