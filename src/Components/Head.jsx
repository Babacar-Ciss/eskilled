import styled from "styled-components";
import LogoPicture from "../assets/logo-dark.svg";
import Button from "./Button";

const HeadStyle = styled.div`
    display: flex;
    justify-content: space-between;
`
    
const Logo = styled.img`
    align-self: center;

    @media (min-width: 375px ) and (max-width: 767px) {
      display: none;
    }
`

const H2 = styled.h2`
    display: none;

    @media (min-width: 375px ) and (max-width: 767px) {
      display: block;
      align-self: center;
      color: #13183F;
      font-size: 28px;
      line-height: 35px;
      font-weight: 800;
    }
`


const Head = () => {
    return (
        <HeadStyle>
            <Logo src={LogoPicture} alt="Logo picture"/>
            <H2>skilled</H2>
            <Button button="button1" />
        </HeadStyle>
    );
}

export default Head;
