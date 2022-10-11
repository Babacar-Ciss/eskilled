import styled from "styled-components";

const ButtonStyle = styled.button`
    width: 167px;
    height: 56px;
    border-radius: 31.5px;
    border: none;
    outline: none;
    color: #FFF;
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
    cursor : pointer;
    background : ${props => props.button === "button1" ? "#13183F" : props.button === "button2" ? "linear-gradient(180deg, #FF6F48 0%, #F02AA6 100%)" : props.button === "button3" ? "linear-gradient(180deg, #4851FF -54.32%, #F02AA6 100%)" : null } ;
    transition: background 0.5s;

    &:hover {
        background : ${props => props.button === "button1" ? "#666CA3" : props.button === "button2" ? "linear-gradient(0deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), linear-gradient(180deg, #FF6F48 0%, #F02AA6 100%)" : props.button === "button3" ? "linear-gradient(0deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), linear-gradient(180deg, #4851FF -54.32%, #F02AA6 100%)" : null } ;
        text-shadow : ${props => props.button === "button2" ? "0px 4px 4px rgba(0, 0, 0, 0.25)" : null};
        transition: all 0.2s;
    }

    @media (min-width: 768px ) and (max-width: 1439px) {
        width: 140px;
        height: 48px;
        font-size: 16px;
    }

    @media (min-width: 375px ) and (max-width: 767px) {
        width: 140px;
        height: 48px;
        font-size: 16px;
    }

`


const Button = ({button}) => {
    return (
        <ButtonStyle button = {button}>
            Get Started  
        </ButtonStyle>
    );
}

export default Button;
