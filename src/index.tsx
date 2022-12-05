import React from "react"
import ReactDOM from "react-dom/client"
import { App } from "./App"
import "./global.scss"
import { ApiDataProvider } from "./hooks/useApiData"
import { MenuProvider } from "./hooks/useMenu"
import { BrowserRouter as Router } from "react-router-dom"
import { BlurProvider } from "./hooks/useBlur"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <ApiDataProvider>
    <MenuProvider>
      <BlurProvider>
        <Router>
          <App />
        </Router>
      </BlurProvider>
    </MenuProvider>
  </ApiDataProvider>
)

