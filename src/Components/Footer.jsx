import styled from "styled-components";
import logoLight from "../assets/logo-light.svg"
import Button from "./Button";

const FooterStyle = styled.div`
    height: 120px;
    margin-top: 140px;
    background-color: #13183F;

    @media (min-width: 768px ) and (max-width: 1439px) {
        margin-top: 86px;
    }

    @media (min-width: 375px ) and (max-width: 767px) {
        margin-top: 80px;
    }
`

const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-inline : auto;
  width: 77%;

  @media (min-width: 375px ) and (max-width: 767px) {
    width: 91.5%;
  }
`

const IMG = styled.img`

    @media (min-width: 375px ) and (max-width: 767px) {
      display: none;
    }   
`


const H2 = styled.h2`
    display: none;

    @media (min-width: 375px ) and (max-width: 767px) {
      display: block;
      align-self: center;
      color: #FFF;
      font-size: 28px;
      line-height: 35px;
      font-weight: 800;
    } 
`

const Footer = () => {
    return (
        <FooterStyle>
            <Container>
                <IMG src={logoLight} alt='Logo Light' />
                <H2>skilled</H2>
                <Button button = 'button3' />
            </Container>
        </FooterStyle>
    );
}

export default Footer;
