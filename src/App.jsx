import { BrowserRouter , Routes, Route } from "react-router-dom";
import Layout from "./paginas/Layout";
import Home from "./paginas/Home";
import Navbar from "./paginas/components/Navbar/Navbar";
import About from "./paginas/About";
import Productos from "./paginas/Productos.jsx";
import { SectionProductos, CardsContainer} from "./paginas/ProductosStyles.js";
import Contacto from "./paginas/Contacto";
import { FooterContainer } from "./paginas/components/Footer/FooterStyles";
import Footer from "./paginas/components/Footer/Footer";
function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" index element={<Layout><Home /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/productos" element={<Layout><Productos /></Layout>} />
        <Route path="/contacto" element={<Layout><Contacto /></Layout>} />
      </Routes>
      {/* <Layout> */}
        {/* <Home /> */}
        {/* <About /> */}
        {/* <SectionProductos> */}
          {/* <CardsContainer> */}
           {/* <Productos /> */}

          {/* </CardsContainer> */}
        {/* </SectionProductos> */}
        {/* <Contacto /> */}
      {/* </Layout> */}
      </BrowserRouter>
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </>
  );
}

export default App;
