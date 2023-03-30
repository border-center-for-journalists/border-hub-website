import React, { Component } from "react"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
  SpecialSection,
  CustomTitle,
  CustomContainer,
  CustomSecondTitle,
  BigArrow,
  RightArrowContainer,
  LeftArrowContainer
} from "./index.styled"
import { SPECIAL_NEWS_URL, NEWS_URL } from '../../utils/constants'
import { Rows, Row, Paragraph } from "../../theme/index.styled"

const RightArrow = ({ onClick }) => (
  <RightArrowContainer onClick={onClick}>
    <BigArrow className="icon-arrow-right" />
  </RightArrowContainer>
);

const LeftArrow = ({ onClick }) => (
  <LeftArrowContainer left onClick={onClick}>
    <BigArrow className="icon-arrow-right" />
  </LeftArrowContainer>
);
class SpecialNews extends Component {
  constructor(props) {
    super(props);
    this.state = { currentSlide: 0 };
  }

  handleSlide = (oldSlide, newSlide) => {
    this.setState({ currentSlide: newSlide });
  }

  render() {
    const { currentSlide = 0 } = this.state;
    const urlSectionType = (this.props.notices.nodes[currentSlide].type) ? SPECIAL_NEWS_URL : NEWS_URL
    const notices = this.props.notices.nodes;
    return (
      <SpecialSection bg={this.props.notices.nodes[currentSlide].data.banner.url}>
        <CustomContainer size="large">
          <CustomTitle>
            <a href="/noticias-especiales/">Ver todas</a> Especiales
          </CustomTitle>
          <Slider
            adaptiveHeight
            infinite
            speed={500}
            slidesToShow={1}
            slidesToScroll={1}
            nextArrow={<RightArrow />}
            prevArrow={<LeftArrow />}
            initialSlide={currentSlide}
            beforeChange={this.handleSlide}
          >
            {notices.map((item, index) => {
              return (
                <CustomSecondTitle fullHeight={false} key={item.uid}>
                  <h3>
                    <a href={`/${urlSectionType}/${item.uid}/`}>
                      {item.data.title.text}
                    </a>
                  </h3>
                  <Paragraph>
                    {item.data.excerpt.text}
                  </Paragraph>
                </CustomSecondTitle>
              )
            })}
          </Slider>
        </CustomContainer>
      </SpecialSection>
    )
  }
}

export default SpecialNews
