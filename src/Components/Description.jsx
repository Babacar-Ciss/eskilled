import styled from "styled-components";
import Button from "./Button";

const DescriptionStyle = styled.div`
    margin-top: 158px;

    @media (min-width: 768px ) and (max-width: 1439px) {
        margin-top: 99px;
    }

    @media (min-width: 375px ) and (max-width: 767px) {
        margin-top: 38px;
    }
`
const H1 = styled.h1`
    color: #13183F;
    font-size: 56px;
    line-height: 71px;
    font-weight: 800;
    padding-right: 50%;
    margin-bottom: 29px;

    @media (min-width: 768px ) and (max-width: 1439px) {
        font-size: 40px;
        line-height: 50px;
        margin-bottom: 24px;
    }

    @media (min-width: 375px ) and (max-width: 767px) {
        font-size: 40px;
        line-height: 50px;
        padding-right: 0;
        margin-bottom: 26px;
    }

    
`

const P = styled.p`
    color: #83869A;
    font-size: 18px;
    line-height: 28px;
    font-weight: 500;
    padding-right: 60%;
    margin-bottom: 40px;

    @media (min-width: 768px ) and (max-width: 1439px) {
        font-size: 16px;
        line-height: 26px;
        padding-right: 40%;
        margin-bottom: 24px;
    }

    @media (min-width: 375px ) and (max-width: 767px) {
        font-size: 16px;
        line-height: 26px;
        padding-right: 0;
        margin-bottom: 24px;
    }
`


const Description = () => {
    return (
        <DescriptionStyle>
            <H1>Maximize skill, minimize budget</H1> 
            <P>Our modern courses across a range of in-demand skills will give you the knowledge you need to live the life you want.</P>
            <Button button="button2" />
        </DescriptionStyle>
    );
}

export default Description;
