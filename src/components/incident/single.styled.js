import styled from "styled-components"
const NoticeSection = styled.section`
  padding-top: 120px;
  background-color: ${props => (props.color ? props.color : props.theme.Black)};
  img {
    margin: 0;
  }
`
const StatusSection = styled.section`
  padding: 40px 5%;
  background-color: ${props => (props.color ? props.color : props.theme.Black)};
  img {
    margin: 0;
  }
  h2 {
    font-size:38px;
  }
`
const NormalNoticeContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.White};
`

const NoticeTitleWrapper = styled.div`
  display: block;
  text-align: ${props => (props.align ? props.align : "center")};
  color: ${props => props.theme.Black};
  p {
    font-size: 15px;
    line-height: 1.67;
    margin: 0;
  }
  h1 {
    color: ${props => props.theme.Black};
    font-size: 48px;
    /*
    font-size: ${props =>
    props.align && props.align === "center" ? "42px" : "39px"}; */
    margin-bottom: 5px;
  }
  hr {
    border: 0 none;
    border: 0 none;
    border-top: 4px solid ${props => props.theme.Yellow};
    margin-top: 10px;
    margin-bottom: 5px;
  }
  ${props => props.theme.smallBreakPoint} {
    padding: 0px 24px;
    h1 {
      font-size: 30px;
    }
  }
`

const ImageWrapper = styled.div`
  margin-top:20px;
  display:flex;
  flex:1;
  justify-content:center;
  img {
    width: 60%;
  }
  ${({color}) => color ==='white' ? `p{ color:white; }`: '' }
`
// statuses
const Timeline = styled.div`
  position: relative;
  margin: 0 auto;

  &::after {
    content: '';
    position: absolute;
    width: 6px;
    background-color: #000;
    top: 0;
    bottom: 0;
    left: 5%;
    margin-left: -3px;
  }
`;

const TimelineContainerRight = styled.div`
  padding: 10px 0px 10px 40px;
  position: relative;
  background-color: inherit;
  width: 100%;
  left: 6%;
  &::after {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    right: -17px;
    background-color: #000;
    top: 15px;
    border-radius: 50%;
    z-index: 1;
    left: -16px;
  }
  
`;
const TimelineContent = styled.div`
  padding: 20px 30px;
  background-color: white;
  position: relative;
  border-radius: 6px;
  ${props => props.theme.smallBreakPoint} {
    margin-right: 10px;
  }
  .title {
    font-size:20px;
  }
  img {
    position:relative;
    top:2px;
  }
  i {
    position: relative;
    top: 2px;
    margin-left: 40px;
    margin-right: 5px;
  }
`;
export {
  NoticeTitleWrapper,
  NoticeSection,
  StatusSection,
  NormalNoticeContainer,
  ImageWrapper,
  Timeline,
  TimelineContainerRight,
  TimelineContent
}
