import { Card, Form, Button } from "react-bootstrap"

function Formulario({ artista, setArtista, musica, setMusica, buscarLetra, loading }) {

  function handleSubmit(e) {
    e.preventDefault()
    buscarLetra()
  }

  return (
  
    <Card className="p-4">
      <h2 className="text-center mb-3">Buscar Letra</h2>

      <Form onSubmit={handleSubmit}>

        <Form.Group className="mb-3">
          <Form.Label>Nome do Artista</Form.Label>
          <Form.Control
            type="text"
            value={artista}
            onChange={(e) => setArtista(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Nome da Música</Form.Label>
          <Form.Control
            type="text"
            value={musica}
            onChange={(e) => setMusica(e.target.value)}
            required
          />
        </Form.Group>

        <div className="d-flex justify-content-center mt-3">
          <Button type="submit" disabled={loading}>
  {loading ? "Buscando..." : "Buscar"}
</Button>


        </div>
      </Form>
    </Card>
  )
}

export default Formulario
