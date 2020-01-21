import React, { Component, Fragment } from 'react';
import Modal from '../modal';
import ModalImage from '../modal/image';
import {
  ImageWrapper,
  ImgBackground
} from "../../theme/index.styled"



class ImageModal extends Component {
  state = {
    open: false,
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };
  render() {
    return (
      <Fragment>
        <ImageWrapper>
          <ImgBackground>
            <img onClick={this.onOpenModal} src={this.props.src} alt={this.props.alt}></img>
          </ImgBackground>
          <p>{(this.props.alt != "null ") ? this.props.alt : ""}</p>
        </ImageWrapper>
        <Modal visible={this.state.open} onClose={this.onCloseModal}>
          <ModalImage imageUrl={this.props.src} />
        </Modal>
      </Fragment>);
  }
}
export default ImageModal;