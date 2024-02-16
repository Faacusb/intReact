import React, { useState } from 'react';
import {
  LinksContainerStyled,
  NavbarContainerStyled,
  ImgLogoContain,
  UserNavStyled,
  UserContainerStyled,
  Burguer,
} from "./NavbarStyles";
import EclipsunLogo from "../../../assets/img/EclipsunLogo-unscreen.gif";
import { FaUserAlt } from "react-icons/fa";
import { Menu, MenuItem, MenuLink } from "./NavbarStyles";

import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";




function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <NavbarContainerStyled>
      <ImgLogoContain>
        <img src={EclipsunLogo} alt="Logo" />
      </ImgLogoContain>

      <LinksContainerStyled>
        <Menu className={isMenuOpen ? 'open' : ''}>
          <MenuItem>
            <MenuLink href="#">Home</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink href="#">Nosotros</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink href="#">Productos</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink href="#">Contacto</MenuLink>
          </MenuItem>
        </Menu>
      </LinksContainerStyled>
      
       
       
        <UserNavStyled>
          <UserContainerStyled>
            <FaUserAlt />
          </UserContainerStyled>
        </UserNavStyled>
       
       
        <Burguer onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} />
        </Burguer>
    </NavbarContainerStyled>
  );
}

export default Navbar;
