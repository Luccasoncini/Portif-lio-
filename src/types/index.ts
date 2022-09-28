export interface ApiAcfDataContent {
  titulo_introduction: string
  botao_contatos_introduction: {
    target: string
    title: string
    url: string
  }
  botao_curriculo_introduction: {
    target: string
    title: string
    url: string
  }
  imagem_introduction: string

  titulo_about: string
  paragrafo_about: string

  titulo_skills: string
  titulo_skills_text: string
  paragrafo_skills_text: string
  titulo_skills_main: string
  skills_item_skills_main: SkillsItem[]

  titulo_works: string
  trabalhos: Work[]

  titulo_contactform: string
  paragrafo_contactform: string
}

export interface RedeSocial {
  icone: string
  url: string
}

export interface SkillsItem {
  icone_skills_main: string
  url_skills_main: string
}

export interface Work {
  imagem_works: string
  link_works: string
}

export interface IntroductionData {
  title: string
  contato: {
    title: string
    url: string
  }
  curriculo: {
    title: string
    url: string
  }
  image: string
}

export interface AboutData {
  title: string
  text: string
}

export interface SkillsData {
  titulo_skills: string
  titulo_skills_text: string
  paragrafo_skills_text: string
  titulo_skills_main: string
  skills_item_skills_main: SkillsItem[]
}

export interface WorksData {
  title: string
  trabalhos: Work[]
}

export interface ContactFormData {
  title: string
  text: string
}
