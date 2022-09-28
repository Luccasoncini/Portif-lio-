import "./introduction.scss"
import { useApiData } from "../../../hooks/useApiData"

export function IntroductionSection() {
  const { introductionData } = useApiData()

  const title = introductionData.title
  const urlBotaoContato = introductionData.contato.url
  const textoBotaoContato = introductionData.contato.title
  const urlBotaoCurriculo = introductionData.curriculo.url
  const textoBotaoCurriculo = introductionData.curriculo.title
  const imagemLucca = introductionData.image

  return (
    <section id="home" className="introduction-section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="introduction-principal-content">
              <div className="introduction-text">
                <h1 dangerouslySetInnerHTML={{ __html: title }}></h1>

                <div className="container-button">
                  <a className="contacts-button" href={urlBotaoContato}>
                    {textoBotaoContato}
                  </a>
                  <a className="curriculo-button" target="_blank" href={urlBotaoCurriculo}>
                    {textoBotaoCurriculo}
                  </a>
                </div>
              </div>
              <div className="introduction-img">
                <img src={imagemLucca} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
