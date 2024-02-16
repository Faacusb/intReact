import { ContactoSection, ContactoFormContainer } from "../assets/css/Contacto";

function Contacto() {
  return (
    <ContactoSection>
      <ContactoFormContainer>
        <h1>¡Contáctanos!</h1>
        <form>
          <input type="text" id="nombre" name="nombre" placeholder="Nombre" required></input>
          <input type="email" id="email" name="email" placeholder="Email" required></input>
          <textarea id="mensaje" name="mensaje" placeholder="Ingrese su consulta.." required></textarea>
          <button type="submit">Enviar</button>
        </form>
      </ContactoFormContainer>
    </ContactoSection>
  )
}

export default Contacto