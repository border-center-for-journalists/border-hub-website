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
  z-index: 999;
`;

export const ModalStyled = styled.div`
  position: relative;
  width: 95vw;
  height: 95vh;
`;

export const ModalImage = styled.div`
  background-color: transparent;
  background-image: url(${({ imageUrl }) => imageUrl});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  width: 100%;
  height: 100%;
  position: absolute;
`;

/**
 * background: transparent url(${({ imageUrl }) => imageUrl}) no-repeat center;
 */

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

  ${props => props.theme.mediumBreakPoint} {
    top: 0px;
    right: 0px;
  }

  img {
    margin: 0 !important;
  }
`;


export default {
  Overlay,
  ModalStyled
};
