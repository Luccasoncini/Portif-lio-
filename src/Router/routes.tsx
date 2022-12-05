import { Route, Routes } from "react-router-dom"
import { Blog } from "../pages/blog"
import { Home } from "../pages/home"
import { NotFound } from "../pages/notFound"

const appRoutes = () => {
  return (
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<Home />} path="/home" />
      <Route element={<Home />} path="/home/:id" />
      <Route element={<Blog />} path="/blog" />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default appRoutes
