import './contactForm.scss'
import emailjs from 'emailjs-com'
import { FormEvent } from 'react'

export function ContactFormSection() {

    function sendEmail(e: FormEvent) {
        e.preventDefault();

        emailjs.sendForm(
            'service_shfcggk',
            'template_ga97qzp',
            '#formulario',
            'zNLMkYLRyXR0tJ2LI'
        ).then(res=>{
            console.log(res)
        }).catch(err => console.log(err));
    }

    return(
        <section className="contactForm-section">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="contactForm-principal-content">
                            <div className="contactForm-title">
                                <h4>Contato</h4>
                                <p>Deseja mandar uma ideia ou talvez uma oportunidade de trabalho? fique a vontade para mandar pelo formulário, todos os e-mails enviados irão chegar a mim, e o mais rápido possivel irei te responder</p>
                            </div>
                            <form action="" id="formulario" onSubmit={sendEmail}>
                                <input required type="text" name="from_name" placeholder="Nome"/>
                                <input required type="email" name="email" placeholder="Email"/>
                                <textarea required name="message" placeholder="Comentário"></textarea>
                                <button type="submit">Enviar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>        
        </section>
        
    )
}