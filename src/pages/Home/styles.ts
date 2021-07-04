import styled from "styled-components";
import Background from '../../assets/images/background.png'

export const HomeComponent = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url(${Background});
    background-repeat: no-repeat;
`;

export const HomeComponentTitle = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    padding-left: 30%;

    justify-content: center;
    align-items: center;
    
    h1 {
        font-family: "Ubuntu", sans-serif;
        font-size: 62px;
        color: #FFF;
        padding: 0 15px;
        text-shadow: .3rem .3rem 1rem #000000;

    }
    
    p {
        font-family: "Ubuntu", sans-serif;
        font-size: 32px;
        padding: 0 15px;
        color: #FFF;
        border-bottom: 1px dashed #5C5C5C;
    }

    @media screen and (max-width: 645px){
        padding-left: 0;
        
        h1 {
            font-size: 10vw;
        }
        p {
            font-size: 5vw;
        }
    }
`;