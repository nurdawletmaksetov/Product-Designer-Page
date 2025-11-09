import { useEffect, useState } from 'react'
import './App.css'
import About from './scenes/about/About'
import Contact from './scenes/contact/Contact'
import Home from './scenes/home/Home'
import Navbar from './scenes/navbar/Navbar'
import Work from './scenes/work/Work'

enum SelectedPage {
  Home = "home",
  About = "about",
  Work = "work",
}

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  })

  return (
    <>
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Home />
      <About setSelectedPage={setSelectedPage} />
      <Work setSelectedPage={setSelectedPage} />
      <Contact />
    </>
  )
}

export default App
