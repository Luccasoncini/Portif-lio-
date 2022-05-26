import './about.scss'

import {
    MdSportsVolleyball, 
    MdOutlineSportsSoccer,
    MdOutlineComputer 
} from 'react-icons/md'

import {
    IoLogoPlaystation
} from 'react-icons/io'

import {
    GiConsoleController
} from 'react-icons/gi'

import {
    FaSpotify,
    FaCoffee
} from 'react-icons/fa'

export function AboutSection() {
    return(
        <section id="about" className="about-section">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="about-principal-content">
                            <h4>Sobre mim</h4>
                            <p>
                                Prazer me chamo Lucca, tenho 19 anos,
                                sou estudante de programação desde os 17 e acho a área fantástica!!!
                                sou uma pessoa muito curiosa, estou constantemente procurando cursos para me
                                profissionalizar, além de sempre estar atento com o mercado de desenvolvimento
                                e suas tecnologias, com o objetivo de conseguir uma vaga onde eu posso utilizar 
                                essas ferramentas que estou tendo o prazer de estudar.
                            </p>
                            <p>
                                Tive experiências profissionais na área de desenvolvimento
                                web como estagiário (HTML5, CSS3, Jquery e Wordpress), como profissional
                                autônomo fazendo sites (HTML5, SCSS, Javascript e Wordpress)
                                e manutenção de sites (React.js, SCSS).
                            </p>
                            <p>
                                E como qualquer programador também sou viciado em um bom café.
                                Gosto muito de esportes como vôlei, futebol e basquete, sou uma pessoa alta
                                então sempre tive facilidade em esportes que precisavam de altura,
                                no computador eu amo jogar FPS, como valorant e CsGo, amo acompanhar mundiais
                                desses esportes! no playstation sempre joguei muito Fifa e Rocket League, 
                                nos jogos de luta o único que me dou bem é o Mortal Kombat que eu só jogava com o Scorpion.
                            </p>
                        </div>
                    </div>
                </div>
            </div>  
            <div className='icon voleyball'>
                <MdSportsVolleyball/>
            </div>
            <div className='icon soccer'>
                <MdOutlineSportsSoccer/>
            </div>
            <div className='icon computer'>
                <MdOutlineComputer/>
            </div>
            <div className='icon logoPlaystation'>
                <IoLogoPlaystation/>
            </div>
            <div className='icon controllerPlaystation'>
                <GiConsoleController/>
            </div>
            <div className='icon spotify'>
                <FaSpotify/>
            </div>  
            <div className='icon coffe'>
                <FaCoffee/>
            </div>
        </section>
    )
}