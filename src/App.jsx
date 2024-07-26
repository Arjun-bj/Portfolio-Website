
import './App.css'
import AboutSection from './components/AboutSection'
import BannerSection from './components/BannerSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import Header from './components/Header'
import ProjectsSection from './components/ProjectsSection'
import SkillSection from './components/SkillSection'
import SocialSideBar from './components/SocialSideBar'

function App() {
 

  return (
    <>
      <Header/>
      <BannerSection/>
      <AboutSection/>
      <ProjectsSection/>
      <SkillSection/>
      <ContactSection/>
      <Footer/>
      <SocialSideBar/>
    </>
  )
}

export default App
