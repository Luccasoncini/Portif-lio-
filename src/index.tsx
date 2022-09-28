import React from "react"
import ReactDOM from "react-dom/client"
import { App } from "./App"
import "./global.scss"
import { ApiDataProvider } from "./hooks/useApiData"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <React.StrictMode>
    <ApiDataProvider>
      <App />
    </ApiDataProvider>
  </React.StrictMode>
)

