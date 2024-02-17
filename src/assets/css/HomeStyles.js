import styled from "styled-components";



export const HomeSectionStyled = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;

`;


export const HomeContainerStyled = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    max-width: 1300px;
    height: 100%;
    margin: 0 auto;
    background-color: #fcbf49;
    gap: 30px;
    
    h1 {
        margin-bottom: 2rem;
    }

    @media (max-width:968px){
        flex-direction: column;
        height: 100%;
        gap: 1px;
    }
    @media (max-width: 576px) {
        width: 100%;
        
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

export const HeroImage = styled.div`
    width: 100%;
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    display: none;
    
    @media (max-width: 960px){
        display: flex;
        width: 100%;
        img{
            
            width: 100%;
        };
    }

    @media (max-width: 576px) {
        background-size: cover;
    }
`;

export const HeroImageText = styled.div`
    display: flex;
    width: 49%;
    left: 0;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    font-size: 20px;
    color: #000;
    text-align: center;

     @media (max-width: 960px){
        img{
            background-size: cover;
            width: 100%;
        };
    }

    @media (max-width: 576px) {
        background-size: cover;
    }

`;

export const HomeImageContainerStyled = styled.div `
    width: 40%;
    padding:10px;
    img {
        border-radius: 50px;
        width: 100%;
        /* padding-bottom: 75px; */
        border-radius: 2%;
    }

    @media (max-width: 960px){
        display: none;
        width: 60%;
        img{
            width: 100%;
        };
    }
`;