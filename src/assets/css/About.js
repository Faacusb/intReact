import styled from "styled-components";

export const AboutSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;  
    max-width: 1300px;
    margin: 0 auto;
    width: 100%;
    background-color: #fcbf49;
`;

export const AboutTextContainer = styled.div`
    display: flex;
    flex-direction: column; 
    justify-content: center;
    width: 80%;
    padding: 10px;
    text-align: center;
    h1{
        font-size: 2.5rem;
    }
    h2{
        font-size: 2rem;
    }
    h3{
        font-size: 1.5rem;
    }

`;

export const AboutImageContainer = styled.div`
    display: flex;
`;