import { Navbar, Nav, Container } from "react-bootstrap"
import { Link } from "react-router-dom"
import logo1 from "../assets/logo1.png";

function Header({irParaHistorico}) {
  return (

    <Navbar bg="dark" variant="dark">

      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src={logo1}
            alt="Logo"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          Buscador de Letras Internacionais
        </Navbar.Brand>





        <Nav>
          <Nav.Link as={Link} to="/">Home</Nav.Link>
         <Nav.Link onClick={irParaHistorico}>
          Histórico
         </Nav.Link>

        </Nav>
      </Container>
    </Navbar>
    
   
  )
}

export default Header
