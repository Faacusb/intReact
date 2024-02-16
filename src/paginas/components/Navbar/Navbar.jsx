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
import { Link } from 'react-router-dom';
import Home from '../../Home';




function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
};
  const closeMenu = () => {
    setIsMenuOpen(false);
    };
  

  return (
    <NavbarContainerStyled>
      <ImgLogoContain>
        <img src={EclipsunLogo} alt="Logo" />
      </ImgLogoContain>

      <LinksContainerStyled>
        <Menu className={isMenuOpen ? 'open' : ''}>
          <MenuItem>
            <MenuLink as={Link}to="/" onClick={closeMenu}>Home</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink as={Link} to="/about" onClick={closeMenu}>Nosotros</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink as={Link} to="/productos" onClick={closeMenu}>Productos</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink as={Link} to="/contacto" onClick={closeMenu}>Contacto</MenuLink>
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
