import './contactForm.scss'
import emailjs from 'emailjs-com'
import { FormEvent, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';

export function ContactFormSection() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isSendingForm, setIsSendingForm] = useState(false);

    function HandleSetName(event: React.FormEvent<HTMLInputElement>) {
        setName(event.currentTarget.value);
        console.log(name);
    }
    function HandleSetEmail(event: React.FormEvent<HTMLInputElement>) {
        setEmail(event.currentTarget.value)
        console.log(email);
    }
    function HandleSetMessage(event: React.ChangeEvent<HTMLTextAreaElement>) {
        setMessage(event.currentTarget.value);
        console.log(message);
    }


    async function sendEmail(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        setIsSendingForm(true);

        await emailjs.sendForm(
            'service_shfcggk',
            'template_ga97qzp',
            '#formulario',
            'zNLMkYLRyXR0tJ2LI'
        )
        .then(res=>{
            setName("");
            setEmail("");
            setMessage("");
            toast.success("Seu formulário foi enviado!");
        })
        .catch(err => {
            toast.error("Erro ao enviar o formulário, tente novamente mais tarde");
        });

        setIsSendingForm(false);

        
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
                                <input 
                                    value={name} 
                                    onChange={HandleSetName} 
                                    required 
                                    type="text" 
                                    name="from_name" 
                                    placeholder="Nome"
                                />
                                <input 
                                    value={email} 
                                    onChange={HandleSetEmail} 
                                    required 
                                    type="email" 
                                    name="email" 
                                    placeholder="Email"
                                />
                                <textarea
                                value={message} 
                                onChange={HandleSetMessage} 
                                required 
                                name="message" 
                                placeholder="Comentário">
                                </textarea>
                                {isSendingForm ? 
                                    <button disabled type="submit">Enviando</button> 
                                    :
                                    <button type="submit">Enviar</button>
                                }
                            </form>
                        </div>
                    </div>
                </div>
            </div>     
        </section>
        
    )
}