import styled from "styled-components";

export const HomeContainerStyled = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    max-width: 1300px;
    margin: 0 auto;
    gap: 30px;
    padding-top: 15px;
    /* background-color: #ffffff; */
    h1 {
        margin-bottom: 2rem;
    }

    @media (max-width:968px){
        flex-direction: column;
    }
    @media (max-width: 576px) {
        width: 80%;
        
    }
`;

export const HomeTextContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 50%;

    h1 {
        font-size: 4rem;
        margin: 10px 0;
        color: #000;
    }

    h2 {
        font-size: 2.5rem;
        margin: 10px 0;
        color: #000;
    }

    p{
        font-size: 1.2rem;
    }

    @media (max-width: 968px){
        width: 80%;
        align-items: center;
        text-align: center;
    }

    @media (max-width:576px) {
        width: 85%;
        h1 {
            font-size: 3rem;
        }
        h2{
            font-size: 2rem;
        }
    }
`;

export const HomeImageContainerStyled = styled.div `
    width: 40%;
    img {
        width: 100%;
        /* padding-bottom: 75px; */
        border-radius: 2%;
    }

    @media (max-width: 960px){
        display: none;
    }
`;