import { HomeContainerStyled, HomeTextContainerStyled, HomeImageContainerStyled } from "../assets/css/HomeStyles";
import Eclipsun from "../assets/img/Eclipsun.jpg";
function Home() {
  return (
    <HomeContainerStyled>
        <HomeTextContainerStyled>
            <h1>Eclipsun.</h1>
            <h2>Encuentra tu estilo bajo el sol.</h2>
        </HomeTextContainerStyled>
    
    <HomeImageContainerStyled>
        <img src={Eclipsun} alt="" />
    </HomeImageContainerStyled>   
    </HomeContainerStyled>
  )
}

export default Home