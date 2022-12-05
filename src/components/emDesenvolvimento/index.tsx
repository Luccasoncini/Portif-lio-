import "./emdesenvolvimento.scss"
import developmentImage from "../../assets/svg/development.svg"

export const Development = () => {
  return (
    <section className="development">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="block-text-centered">
              <h1>Página em desenvolvimento</h1>
            </div>
            <img src={developmentImage} alt="page in development" />
          </div>
        </div>
      </div>
    </section>
  )
}
