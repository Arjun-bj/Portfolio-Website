
import './App.css'
import AboutSection from './components/AboutSection'
import BannerSection from './components/BannerSection'
import ContactSection from './components/ContactSection'
import CustomCursor from './components/CustomCursor'
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
      <CustomCursor/>
    </>
  )
}

export default App
