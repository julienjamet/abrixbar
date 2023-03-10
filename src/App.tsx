import { FC } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Navbar } from "./components/Navbar"
import { Association } from "./pages/Association"
import { Bar } from "./pages/Bar"
import { Contact } from "./pages/Contact"
import { Grocery } from "./pages/Grocery"
import { Home } from "./pages/Home"
import { Partners } from "./pages/Partners"
import { Project } from "./pages/Project"
import { Season } from "./pages/Season"

export const App: FC = () => {

  return (
    <BrowserRouter>
      <div className="logo">
        <img src="./logo.webp" alt="logo" width="250" />
      </div>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/association" element={<Association />} />
        <Route path="/season" element={<Season />} />
        <Route path="/bar" element={<Bar />} />
        <Route path="/grocery" element={<Grocery />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}