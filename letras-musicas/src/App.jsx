import Header from "./components/Header"
import Formulario from "./components/Formulario"
import { Container } from "react-bootstrap"
import { useState, useRef } from "react"

function App() {

  const [artista, setArtista] = useState("")
  const [musica, setMusica] = useState("")
  const [letra, setLetra] = useState("")
  const [erro, setErro] = useState("")
  const [loading, setLoading] = useState(false)
  const [historico, setHistorico] = useState([])

  const historicoRef = useRef(null)

  function irParaHistorico() {
    historicoRef.current?.scrollIntoView({ behavior: "smooth" })
  }

 async function buscarLetra() {
  setErro("")
  setLetra("")
  setLoading(true)

  if (!artista || !musica) {
    setErro("Preencha artista e música 🎧")
    setLoading(false)
    return
  }

  try {
   const response = await fetch(
  `/lyrics/v1/${encodeURIComponent(artista)}/${encodeURIComponent(musica)}`
)


    const dados = await response.json()


    if (dados.lyrics) {
      setLetra(dados.lyrics)

      setHistorico((prev) => [
        ...prev,
        { artista, musica }
      ])
    } else {
      setErro("Letra não encontrada 😢")
    }

  } catch (error) {
    setErro("Erro ao buscar letra.")
  } finally {
    setLoading(false)
  }
}

  return (
    <>
      <Header irParaHistorico={irParaHistorico} />

      <Container className="mt-4">
        <Formulario
          artista={artista}
          setArtista={setArtista}
          musica={musica}
          setMusica={setMusica}
          buscarLetra={buscarLetra}
          loading={loading}
        />

        {loading && (
          <p className="text-center mt-3">
            Buscando letra... 🎶
          </p>
        )}

        {erro && (
          <p className="text-danger text-center mt-3">
            {erro}
          </p>
        )}

        {letra && (
          <>
            <h4 className="mt-4 text-center">
              {musica} by {artista}
            </h4>

            <pre className="mt-3 p-3 border rounded bg-light">
              {letra}
            </pre>
          </>
        )}

        <div ref={historicoRef}>
          {historico.length > 0 && (
            <div className="mt-5">
              <h5>Histórico de buscas 🎧</h5>

              <ul className="list-group">
                {historico.map((item, index) => (
                  <li key={index} className="list-group-item">
                    <strong>{item.musica}</strong> by {item.artista}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </Container>
    </>
  )
}

export default App
