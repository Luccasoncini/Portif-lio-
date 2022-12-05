import "./notFound.scss"
import notFoundImage from "../../assets/svg/notFound.svg"

export const NotFound = () => {
  return (
    <main>
      <section className="notFound">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="block-text-centered">
                <h1>
                  Página <br />
                  não encontrada
                </h1>
              </div>

              <img src={notFoundImage} alt="page not found" />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
