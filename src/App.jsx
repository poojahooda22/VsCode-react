
import './App.css'
import AgentMode from './components/AgentMode/AgentMode'
import BannerSection from './components/BannerSection/BannerSection'
import CodeAnywhere from './components/CodeAnywhere/CodeAnywhere'
import HeroSection from './components/HeroSection/HeroSection'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <>
      <Navbar/>
      <HeroSection/>
      <BannerSection/>
      <AgentMode/>
      <CodeAnywhere/>
      {/* <CodewithFeatures/> */}
    </>
  )
}

export default App
