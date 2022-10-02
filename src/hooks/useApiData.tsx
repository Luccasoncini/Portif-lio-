import axios from "axios"
import { createContext, ReactNode, useContext, useEffect, useState } from "react"
import { toast } from "react-toastify"
import {
  AboutData,
  ApiAcfDataContent,
  ContactFormData,
  IntroductionData,
  RedeSocial,
  SkillsData,
  WorksData
} from "../types"

interface ApiProviderProps {
  children: ReactNode
}

interface ApiContextData {
  apiData?: ApiAcfDataContent
  setApiData?: () => void
  redesSociais: RedeSocial[]
  setRedesSociais?: () => void
  introductionData: IntroductionData
  isLoading: boolean
  setIsLoading?: () => void
  aboutData: AboutData
  skillsData: SkillsData
  worksData: WorksData
  contactData: ContactFormData
}

export const ApiDataContext = createContext<ApiContextData>({} as ApiContextData)

export function ApiDataProvider({ children }: ApiProviderProps) {
  const [apiData, setApiData] = useState<ApiAcfDataContent>({
    titulo_introduction: "",
    botao_contatos_introduction: {
      target: "",
      title: "",
      url: ""
    },
    botao_curriculo_introduction: {
      target: "",
      title: "",
      url: ""
    },
    imagem_introduction: "",

    titulo_about: "",
    paragrafo_about: "",

    titulo_skills: "",
    titulo_skills_text: "",
    paragrafo_skills_text: "",
    titulo_skills_main: "",
    skills_item_skills_main: [],

    titulo_works: "",
    trabalhos: [],

    titulo_contactform: "",
    paragrafo_contactform: ""
  })

  const [redesSociais, setRedesSociais] = useState<RedeSocial[]>([])

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    axios
      .get("https://www.lucca.detalhesimper.com.br/wp-json/wp/v2/pages/2?acf_format=standard")
      .then((res): any => {
        const response = res.data.acf
        setApiData(response)
        setTimeout(() => {
          setIsLoading(false)
        }, 3000)
      })

      .catch((e) => {
        const errorNumber = e.response.status
        toast.error(`Ops, algo deu errado Erro: ${errorNumber}`)
      })
  }, [])

  useEffect(() => {
    setIsLoading(true)
    axios
      .get("https://www.lucca.detalhesimper.com.br/wp-json/wp/v2/options?acf_format=standard")
      .then((res2): any => {
        const response2 = res2.data
        setRedesSociais(response2)
        setTimeout(() => {
          setIsLoading(false)
        }, 3000)
      })

      .catch((e) => {
        const errorNumber = e.response.status
        toast.error(`Ops, algo deu errado Erro: ${errorNumber}`)
      })
  }, [])

  const introductionData: IntroductionData = {
    title: apiData.titulo_introduction,
    contato: {
      title: apiData.botao_contatos_introduction.title,
      url: apiData.botao_contatos_introduction.url
    },
    curriculo: {
      title: apiData.botao_curriculo_introduction.title,
      url: apiData.botao_curriculo_introduction.url
    },
    image: apiData.imagem_introduction
  }
  const aboutData: AboutData = {
    title: apiData.titulo_about,
    text: apiData.paragrafo_about
  }
  const skillsData: SkillsData = {
    titulo_skills: apiData.titulo_skills,
    titulo_skills_text: apiData.titulo_skills_text,
    paragrafo_skills_text: apiData.paragrafo_skills_text,
    titulo_skills_main: apiData.titulo_skills_main,
    skills_item_skills_main: apiData.skills_item_skills_main
  }
  const worksData: WorksData = {
    title: apiData.titulo_works,
    trabalhos: apiData.trabalhos
  }
  const contactData: ContactFormData = {
    title: apiData.titulo_contactform,
    text: apiData.paragrafo_contactform
  }

  return (
    <ApiDataContext.Provider
      value={{ introductionData, aboutData, skillsData, worksData, contactData, redesSociais, isLoading }}
    >
      {children}
    </ApiDataContext.Provider>
  )
}

export function useApiData() {
  const context = useContext(ApiDataContext)

  return context
}
