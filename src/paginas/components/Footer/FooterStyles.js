import styled from "styled-components";

export const FooterContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    height: auto;
    background-color: antiquewhite;
    width: 100%;
    @media (max-width: 576px){
        flex-direction: column;
        align-items: center;
    }
`;

export const TextFooter = styled.div`
    align-items: center;
    justify-content: center;
    

`;

export const RedesFooter = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    padding: 5px 0;
    svg{
        font-size: 25px;
    }
    @media (max-width: 576px) {
        flex-direction: column;
    }
`
