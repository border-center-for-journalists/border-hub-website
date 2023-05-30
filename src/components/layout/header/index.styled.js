import styled from "styled-components"

const Header = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  z-index: 3;
`

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: row;
  div {
    width: 60px;
  }
`

const ProductIcon = styled.a`
  display: inline-block;
  text-decoration: none;
  height: 60px;
  ${props => props.minify ? "position: fixed; top: 10px; left: calc(50% - 22px);" : ""}

  img {
    height: ${props => props.minify ? "45px" : "60px"};
    padding: 0;
    margin: 0;
  }

  span {
    display: none;
  }
`

const SmHidden = styled.div`
  display: none;

  ${props => props.theme.lgBP} {
    display: block;
  }

  ${props => props.theme.xlBP} {
    display: block;
  }
`

export {
  Header,
  ProductIcon,
  MenuWrapper,
  SmHidden
}