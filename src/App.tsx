import React from "react"
import { Footer } from "./components/footer"
import { Header } from "./components/header"
import { Loading } from "./components/loading"
import { Home } from "./components/pages/home"
import { useApiData } from "./hooks/useApiData"
import { MenuProvider } from "./hooks/useMenu"

export function App() {
  const { isLoading } = useApiData()
  console.log(isLoading)
  if (isLoading) {
    return (
      <MenuProvider>
        <Header />
        <Loading />
      </MenuProvider>
    )
  }

  return (
    <MenuProvider>
      <Header />
      <Home />
      <Footer />
    </MenuProvider>
  )
}

