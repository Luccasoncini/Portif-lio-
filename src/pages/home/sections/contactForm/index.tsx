import "./contactForm.scss"
import emailjs from "emailjs-com"
import { FormEvent, useState } from "react"
import { toast } from "react-toastify"
import { useApiData } from "../../../../hooks/useApiData"
import { motion } from "framer-motion"
import { fadeIn, slideToRight } from "../../../../Animation"

export function ContactFormSection() {
  const { contactData } = useApiData()

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [isSendingForm, setIsSendingForm] = useState(false)

  function HandleSetName(event: React.FormEvent<HTMLInputElement>) {
    setName(event.currentTarget.value)
  }
  function HandleSetEmail(event: React.FormEvent<HTMLInputElement>) {
    setEmail(event.currentTarget.value)
  }
  function HandleSetMessage(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setMessage(event.currentTarget.value)
  }

  async function sendEmail(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    setIsSendingForm(true)

    await emailjs
      .sendForm("service_ixybj8b", "template_ga97qzp", "#formulario", "zNLMkYLRyXR0tJ2LI")
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

  if (!title && !text) {
    return null
  }

  return (
    <section id="contato" className="contactForm-section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="contactForm-principal-content">
              <div className="contactForm-title">
                <motion.h4
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true, amount: 0.8 }}
                  variants={fadeIn}
                >
                  {title}
                </motion.h4>
                <motion.p
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true, amount: 0.8 }}
                  variants={fadeIn}
                  dangerouslySetInnerHTML={{ __html: text }}
                ></motion.p>
              </div>
              <motion.form
                action=""
                id="formulario"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
                variants={slideToRight}
                onSubmit={sendEmail}
              >
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
              </motion.form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
