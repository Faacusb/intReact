import styled from "styled-components";

export const SectionProductos = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 20px;
    padding-bottom: 20px;
    
    
    
`;

export const CardsContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    max-width: 1300px;
    align-items: center;
    gap: 20px;
    @media (max-width:968px){
        flex-direction: column;
        width: 80%;
        height: auto;
    }
    padding-top: 10px;
    padding-bottom: 20px;

    @media (max-width: 576px) {
        width: 85%;
    }



`;


export const CardProducto = styled.div`
    width: 40%;
    /* height: 440px; */
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    background-color: #f2f2f2;
    cursor: pointer;
    text-wrap: balance;
    text-align: center;
    h3{
        width: 80%;
    }
    span{
        font-weight: 600;
        font-size: 20px;
    }
    img {
        width: 340px;
    }

    button{
        padding: 10px;
        border-radius: 10px;
    }
    @media (max-width: 968px) {
        width: 100%;

        
        
    }

    @media (max-width:576px) {
        width: 90%;
        img{
            width: 220px;
        }
    }


`;