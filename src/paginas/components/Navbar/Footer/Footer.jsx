import {FooterContainer, TextFooter, RedesFooter} from './FooterStyles';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <FooterContainer>
    <RedesFooter>
     <span><FontAwesomeIcon icon={faFacebook}/> Eclipsun</span> 

      <span><FontAwesomeIcon icon={faXTwitter}/> Eclipsun</span>

      <span><FontAwesomeIcon icon={faInstagram}/> Eclipsun</span>  
    </RedesFooter>

    <TextFooter>
      <h3> Todos los derechos reservados.</h3>
      
    </TextFooter>
      
  </FooterContainer>
  )
}

export default Footer