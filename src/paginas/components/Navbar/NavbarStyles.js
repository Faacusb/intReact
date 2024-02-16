import styled from "styled-components";


export const NavbarContainerStyled = styled.div`
    height: 100px;
    
    background-color: antiquewhite;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px ;
    
    
    @media (max-width: 768px){
        /* padding: 1rem 2rem; */

    }
    @media (max-width: 576px) {
        width: auto;
    }
`;
export const ImgLogoContain = styled.div`
width: 50%;

    img{
            width: 100px;
        }
`;


export const LinksContainerStyled = styled.div`
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    /* gap: 40px; */
    gap: 10px;
    position: absolute;
    right: 0;
    left: 0;
    a {
        padding: 1rem ;
    }
    a {
        background: #b8bedd;
        border-radius: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 80px;
        /* gap: 5px; */
    }
    svg:first-child {
        color: white;
        font-size: 2.5rem;
    }    
    
`;

export const LinkContainerStyled = styled.div`
    font-size: 30px;
    color: white;
    padding: 10px;

    @media (max-width: 768px){
    position: absolute;
    top: 35px;
    right: 50px;
    
    }
`;

export const UserContainerStyled = styled(LinkContainerStyled)`
    display: flex;
    align-items: center;
`;


export const Menu = styled.ul`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;

    
    @media (max-width: 768px) {
        display: none;
        flex-direction: column;
        
        align-items: center;
        justify-content: center;
        gap: 20px;
        height: auto;
        background-color: #f6bd60;
        width: 100%;
        position: absolute;
        left: 0;
        right: 0;
        padding: 20px 0;
        top: 44px;
        ;

        &.open {
        display: flex;
    }

        
    }
    `;

export const MenuItem = styled.li`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    
    `;

export const MenuLink = styled.a`
    text-decoration: none;
    &:hover{
        color: #fb8500;
        background-color: white
        
    }
    
`;

export const MenuContainerStyled = styled(LinkContainerStyled)`
    display: none;
    align-items: center;
    font-size: 2rem;
    cursor: pointer;
    @media (max-width: 768px){
        display: flex;
    }
`;

export const UserNavStyled = styled.div`
    gap: 15px;
    cursor: pointer;
    span {
        color: black;
        font-size: 1rem;
        margin-right: 20px;
    }
    /* @media (max-width: 768px) {
        display: none;
    } */
`;

export const UserImageStyled = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 100px;
    cursor: pointer;
`;

export const SpanStyled = styled.span` 
    &:hover {
        text-decoration: underline;
    }
`;

export const Burguer = styled.div`
    cursor: pointer;
    display: none;
    svg:last-child{
        font-size: 40px;
        color: #fb8500;
    }
    @media (max-width: 768px) {
        display: flex;
    }

    /* @media (max-width: 576px) {
        display: flex;
    } */
`;
