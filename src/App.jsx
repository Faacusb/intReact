import { BrowserRouter , Routes, Route } from "react-router-dom";
import Layout from "./paginas/Layout";
import Home from "./paginas/Home";
import Navbar from "./paginas/components/Navbar/Navbar";
import Productos from "./paginas/Productos.jsx";
import { SectionProductos, CardsContainer, CardProducto } from "./paginas/ProductosStyles.js";
import { FooterContainer } from "./paginas/components/Navbar/Footer/FooterStyles";
import Footer from "./paginas/components/Navbar/Footer/Footer";
function App() {
  return (
    <>
      <Navbar />
      <Layout>
        <Home />
        <SectionProductos>
          <CardsContainer>
           <Productos />

          </CardsContainer>
        </SectionProductos>
      </Layout>

      <FooterContainer>
        <Footer />
      </FooterContainer>
    </>
  );
}

export default App;
