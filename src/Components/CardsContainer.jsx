import styled from "styled-components";
import Card from "./Card";
import logoAnimation from "../assets/icon-animation.svg";
import logoBusiness from "../assets/icon-business.svg";
import logoCrypto from "../assets/icon-crypto.svg";
import logoDesign from "../assets/icon-design.svg";
import logoPhotography from "../assets/icon-photography.svg";



const CardsContainerStyle = styled.div`
    margin-top: 250px;
    display: grid;
    place-content: center;
    grid-template-columns: repeat(3, 350px);
    grid-template-rows: repeat(2, 322px);
    row-gap: 80px;
    column-gap: 30px;

    @media (min-width: 768px ) and (max-width: 1439px) {
        margin-top: 210px;
        grid-template-columns: 339px 340px;
        grid-template-rows: repeat(3, 259px);
        row-gap: 56px;
        column-gap: 10px;
    }

    @media (min-width: 375px ) and (max-width: 767px) {
        margin-top: 410px;
        grid-template-columns: 100%;
        grid-template-rows: 120px repeat(5, 259px);
        row-gap: 40px;
        column-gap: 0;
    }


`

const Summary = styled.div`
   padding-top: 64px;
   padding-left: 32px;
   background: linear-gradient(180deg, #FF6F48 0%, #F02AA6 100%);
   border-radius: 15px;

   @media (min-width: 375px ) and (max-width: 767px) {
        padding-top: 24px;
        padding-left: 28px;
    }
`

const P = styled.p`
    color: #FFFFFF;
    font-size: 32px;
    line-height: 40px;
    font-weight: 800;
    padding-right: 4%;

    @media (min-width: 375px ) and (max-width: 767px) {
        font-size: 24px;
        line-height: 32px;
    }
`



const CardsContainer = () => {
    return (
        <CardsContainerStyle>
            <Summary>
                <P> Check out our most popular courses!  </P>
            </Summary>
            
            <Card logo={logoAnimation} 
                  title="Animation"
                  text="Learn the latest animation techniques to create stunning motion design and captivate your audience." />
            
            <Card logo={logoDesign} 
                  title="Design"
                  text="Create beautiful, usable interfaces to help shape the future of how the web looks." />

            <Card logo={logoPhotography} 
                  title="Photography"
                  text="Explore critical fundamentals like lighting, composition, and focus to capture exceptional photos." />

            <Card logo={logoCrypto} 
                  title="Crypto"
                  text="All you need to know to get started investing in crypto. Go from beginner to advanced with this 54 hour course." />

            <Card logo={logoBusiness} 
                  title="Business"
                  text="A step-by-step playbook to help you start, scale, and sustain your business without outside investment." />

        </CardsContainerStyle>
    );
}

export default CardsContainer;
