import styled from "styled-components";

export const ContactoSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 79vh;
    max-width: 1300px;
    margin: 0 auto;
    flex-direction: column;
    height: 81vh;
    /* padding: 40px; */
    @media (max-width:968px) {
        height: 68vh;
    }

    @media (max-width:576px) {
        width: 50%;
        height:68vh;

        
    }
    `;

export const ContactoFormContainer = styled.div`
    display: flex;  
    justify-content: center;
    align-items: center;
    flex-direction: column;
    /* height: 79vh; */

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