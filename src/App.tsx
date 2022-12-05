import { ToastContainer } from "react-toastify"
import { useApiData } from "./hooks/useApiData"
import Routes from "./Router/routes"
import "react-toastify/dist/ReactToastify.css"
import { Loading } from "./components/loading"
import { Header } from "./parts/header"
import { Footer } from "./parts/footer"
import { Blur } from "./components/blur"

export function App() {
  const { isLoading } = useApiData()
  if (isLoading) {
    return (
      <>
        <Header />
        <Loading />
      </>
    )
  }

  return (
    <>
      <Blur />
      <Header />
      <Routes />
      <Footer />
      <ToastContainer autoClose={3000} hideProgressBar={true} />
    </>
  )
}

