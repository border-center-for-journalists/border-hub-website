import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Styled, { CloseButton } from './index.styled';
import cross from '../../theme/cross.svg'

const { ModalStyled, Overlay } = Styled;

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      outerClickClose: false
    }
  }

  handleEnterMouse = () => {
    this.setState({ outerClickClose: false });
  }

  handleLeaveMouse = () => {
    this.setState({ outerClickClose: true });
  }

  handleOuterClick = () => {
    if (this.state.outerClickClose) {
      this.props.onClose();
    }
  }

  render() {
    const {
      props: { children, onClose, visible = true }
    } = this;

    if (!visible) return null;

    return ReactDOM.createPortal(
      <Overlay onClick={this.handleOuterClick}>
        <ModalStyled onMouseEnter={this.handleEnterMouse} onMouseLeave={this.handleLeaveMouse}>
          {children}
          <CloseButton onClick={onClose}>
            <img src={cross} />
          </CloseButton>
        </ModalStyled>
      </Overlay>, document.getElementsByTagName('body')[0]
    );
  }
}

// const Modal = props => ReactDOM.createPortal(<ModalLogic {...props} />, , document.getElementsByTagName('body')[0]);

export default Modal;
