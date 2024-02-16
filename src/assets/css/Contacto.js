import styled from "styled-components";

export const ContactoSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 1300px;
    margin: 0 auto;
    flex-direction: column;
    /* padding: 40px; */
    height: 74vh;
    @media (max-width:576px) {
        width: 50%;

        
    }
    `;

export const ContactoFormContainer = styled.div`
    display: flex;  
    justify-content: center;
    align-items: center;
    flex-direction: column;

    form{
        display: flex;
        flex-direction: column;
        width: 250px;
        gap: 10px;
        @media (max-width:576px) {
            width: 100%;
            
        }
    }
`;