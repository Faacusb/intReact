import {
  LinkContainerStyled,
  LinksContainerStyled,
  NavbarContainerStyled,
  ImgLogoContain,
  UserNavStyled,
  UserContainerStyled,
  HomeContainerStyled,
  Burguer,
} from "./NavbarStyles";
import EclipsunLogo from "../../../assets/img/EclipsunLogo-unscreen.gif";
import { FaUserAlt } from "react-icons/fa";
import { HiHome } from "react-icons/hi";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Navbar() {
  return (
    <NavbarContainerStyled>
      <ImgLogoContain>
        <img src={EclipsunLogo} alt="Logo" />
      </ImgLogoContain>
      <LinksContainerStyled>
        <HomeContainerStyled>
          <a href="#">
            <LinkContainerStyled>
              <HiHome />
            </LinkContainerStyled>
            Home
          </a>
          <a href="#">Productos</a>
        </HomeContainerStyled>

        <UserNavStyled>
          <UserContainerStyled>
            <FaUserAlt />
          </UserContainerStyled>
        </UserNavStyled>
        <Burguer>
          <FontAwesomeIcon icon={faBars} />
        </Burguer>
      </LinksContainerStyled>
    </NavbarContainerStyled>
  );
}

export default Navbar;
