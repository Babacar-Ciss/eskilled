import styled from "styled-components";
import heroPictureDesktop from "./assets/image-hero-desktop.webp";
import heroPictureTablet from "./assets/image-hero-tablet.webp";
import heroPictureMobile from "./assets/image-hero-mobile.webp";
import Footer from "./Components/Footer";
import Main from "./Components/Main";
import GlobalStyle from "./themes/GlobalStyle";

const AppStyle = styled.div`
    width: 100%;
    position : relative;
    height: 100vh;
`

const IMGDesktop = styled.img`
  z-index: -1;
  position: absolute;
  right: -23%;
  top: -15%;
  scale: 0.95;

  @media (min-width: 768px ) and (max-width: 1439px) {
      display: none;
  }

  @media (min-width: 375px ) and (max-width: 767px) {
      display: none;
  }
`

const IMGTablet = styled.img`
  z-index: -1;
  display: none;

  @media (min-width: 768px ) and (max-width: 1439px) {
    display: block;
    position: absolute;
    right: -39%;
    top: -8%;
  }
`

const IMGMobile = styled.img`
  display: none;
  
  @media (min-width: 375px ) and (max-width: 767px) {
    display: block;
    z-index: -1;
    position: absolute;
    right: -8%;
    top: 38%;
  }
`

const Container = styled.div`
  margin-inline : auto;
  padding-top: 39px;
  width: 77%;


  @media (min-width: 768px ) and (max-width: 1439px) {
    padding-top : 31px;
    width: 90%;
  }

  @media (min-width: 375px ) and (max-width: 767px) {
    padding-top : 16px;
    width: 91.5%;
  }

`


function App() {
  return (
    <>
      <GlobalStyle />
        <AppStyle>
          <IMGDesktop src={heroPictureDesktop} alt='Hero Picture Desktop' />
          <IMGTablet src={heroPictureTablet} alt='Hero Picture Tablet' />
          <IMGMobile src={heroPictureMobile} alt='Hero Picture Mobile' />
          <Container>
            <Main />
          </Container>
          <Footer />
        </AppStyle>
    </>
  );
}

export default App;
