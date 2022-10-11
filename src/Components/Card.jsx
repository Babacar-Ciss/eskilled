import styled from "styled-components";


const CardStyle = styled.div`
    grid-row: auto;
    grid-column: auto;

    border-radius: 15px;
    box-shadow: 0px 25px 50px rgba(6, 22, 141, 0.0442381);
    padding-inline: 32px;

    @media (min-width: 375px ) and (max-width: 767px) {
        padding-inline: 28px;
    }
`
const IconContainer = styled.div`
    width: 56px;
    height: 56px;
    border-radius: 50%;
    margin-top: -27px;
    background:  url(${props => props.logo}) , linear-gradient(180deg, #FF6F48 0%, #F02AA6 100%);
    margin-bottom: 32px;

    @media (min-width: 768px ) and (max-width: 1439px) {
        margin-bottom: 24px;
    }

    @media (min-width: 375px ) and (max-width: 767px) {
        margin-bottom: 24px;
    }
`

const Container = styled.div`
    height: 68.5%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const H1 = styled.h1`
    color: #13183F;
    font-size: 24px;
    line-height: 30px;
    font-weight: 800;

    @media (min-width: 768px ) and (max-width: 1439px) {
        font-size: 20px;
        line-height: 25px;
    }

    @media (min-width: 375px ) and (max-width: 767px) {
        font-size: 20px;
        line-height: 25px;
    }
`

const P = styled.p`
    color: #83869A;
    font-size: 18px;
    line-height: 28px;
    font-weight: 500;
    align-self: baseline;

    @media (min-width: 768px ) and (max-width: 1439px) {
        font-size: 16px;
        line-height: 26px;
    }

    @media (min-width: 375px ) and (max-width: 767px) {
        font-size: 16px;
        line-height: 26px;
    }
`

const A = styled.a`
    &:link,
    &:visited {
        color: #F74780;
        font-size: 18px;
        line-height: 28px;
        font-weight: 700;
        text-decoration: none;
    }
`


const Card = ({logo, title, text}) => {
    return (
        <CardStyle>
            <IconContainer logo = {logo}></IconContainer>
            <Container>
                <H1> {title} </H1>
                <P> {text} </P>
                <A href="/#"> Get Started </A>
            </Container>
            
        </CardStyle>
    );
}

export default Card;
