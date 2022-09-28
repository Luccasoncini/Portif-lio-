import "./contactForm.scss"
import emailjs from "emailjs-com"
import { FormEvent, useState } from "react"
import { toast } from "react-toastify"
import { useApiData } from "../../../hooks/useApiData"

export function ContactFormSection() {
  const { contactData } = useApiData()

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [isSendingForm, setIsSendingForm] = useState(false)

  function HandleSetName(event: React.FormEvent<HTMLInputElement>) {
    setName(event.currentTarget.value)
    console.log(name)
  }
  function HandleSetEmail(event: React.FormEvent<HTMLInputElement>) {
    setEmail(event.currentTarget.value)
    console.log(email)
  }
  function HandleSetMessage(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setMessage(event.currentTarget.value)
    console.log(message)
  }

  async function sendEmail(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    setIsSendingForm(true)

    await emailjs
      .sendForm("service_6l2aw0o", "template_ga97qzp", "#formulario", "zNLMkYLRyXR0tJ2LI")
      .then((res) => {
        setName("")
        setEmail("")
        setMessage("")
        toast.success("Seu formulário foi enviado!")
      })
      .catch((err) => {
        toast.error("Erro ao enviar o formulário, tente novamente mais tarde")
        console.log(err)
      })

    setIsSendingForm(false)
  }

  const title = contactData.title
  const text = contactData.text

  return (
    <section id="contact" className="contactForm-section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="contactForm-principal-content">
              <div className="contactForm-title">
                <h4>{title}</h4>
                <p dangerouslySetInnerHTML={{ __html: text }}></p>
              </div>
              <form action="" id="formulario" onSubmit={sendEmail}>
                <input value={name} onChange={HandleSetName} required type="text" name="from_name" placeholder="Nome" />
                <input value={email} onChange={HandleSetEmail} required type="email" name="email" placeholder="Email" />
                <textarea
                  value={message}
                  onChange={HandleSetMessage}
                  required
                  name="message"
                  placeholder="Comentário"
                ></textarea>
                {isSendingForm ? (
                  <button disabled type="submit">
                    Enviando
                  </button>
                ) : (
                  <button type="submit">Enviar</button>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
