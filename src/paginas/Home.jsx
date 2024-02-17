import {
  HomeSectionStyled,
  HomeContainerStyled,
  HeroImage,
  HeroImageText,
  HomeTextContainerStyled,
  HomeImageContainerStyled,
} from "../assets/css/HomeStyles";
import Eclipsun from "../assets/img/Eclipsun.jpg";
import fotoHero from "../assets/img/fotoHero.jpg";
function Home() {
  return (
    <HomeSectionStyled>
      <HomeContainerStyled>
        <HomeTextContainerStyled>
          <h1>Eclipsun.</h1>
          <h2>Encuentra tu estilo bajo el sol.</h2>
        </HomeTextContainerStyled>

        <HomeImageContainerStyled>
          <img src={Eclipsun} alt="" />
        </HomeImageContainerStyled>
      </HomeContainerStyled>

      <HomeContainerStyled>
        <HeroImageText>
          <h3> SE NECESITA VALOR PARA SER AUTÉNTICO.</h3>
        </HeroImageText>
        <HeroImage>
          <img src={fotoHero} alt="" />
        </HeroImage>
      </HomeContainerStyled>
    </HomeSectionStyled>
  );
}

export default Home;
