import React, { Component } from "react"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
  SpecialSection,
  Subtitle,
  CustomContainer,
  Arrow,
  ArrowContainer,
  NewsContainer,
  NewsTitle,
  NewsContent,
  SliderContainer
} from "./index.styled"
import { SPECIAL_NEWS_URL, NEWS_URL } from '../../utils/constants'

const RightArrow = ({ onClick }) => (
  <ArrowContainer onClick={onClick}>
    <Arrow className="icon-arrow-right" />
  </ArrowContainer>
);

const LeftArrow = ({ onClick }) => (
  <ArrowContainer rotate={"transform: rotate(180deg);"} onClick={onClick}>
    <Arrow className="icon-arrow-right" />
  </ArrowContainer>
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
    const notices = this.props.notices.nodes;

    const settings = {
      adaptiveHeight: true,
      infinite: true,
      speed: 1000,
      slidesToScroll: 1,
      slidesToShow: 1,
      beforeChange: this.handleSlide,
      nextArrow: <RightArrow />,
      prevArrow: <LeftArrow />
    }

    return (
      <SpecialSection
        bg={this.props.notices.nodes[currentSlide].data.banner.url}
      >
        <CustomContainer size="large">
          <Subtitle>
            <h2>Especiales</h2>
            <a href="/noticias-especiales/">Ver todas</a>
          </Subtitle>
          <SliderContainer>
            <Slider {...settings}>
              {notices.map((notice, index) => {
                const { type, uid, data } = notice
                const { title, excerpt } = data
                const section =
                  type === "noticias_especiales"
                    ? SPECIAL_NEWS_URL
                    : NEWS_URL
                return (
                  <NewsContainer key={index}>
                    <NewsTitle>
                      <a
                        href={`/${section}/${uid}`}
                        alt={title.text}
                      >
                        {title.text}
                      </a>
                    </NewsTitle>
                    <NewsContent>{excerpt.text}</NewsContent>
                  </NewsContainer>
                )
              })}
            </Slider>
          </SliderContainer>
        </CustomContainer>
      </SpecialSection>
    )
  }
}

export default SpecialNews
