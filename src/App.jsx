import { useState, useRef } from 'react'
import Header from './components/Header'
import MainContent from './components/MainContent'
export default function App() {
  const aboutRef = useRef(null);
  const skillRef = useRef(null);
  const expRef = useRef(null);
  const projRef = useRef(null);
  const resumeRef = useRef(null);

  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({ 
      alignToTop: true,
      behavior: 'smooth' });
  }


  const [buttonContent, setButton] = useState('About me')
  const [lightMode, setLight] = useState(true)
  return (
    <>
      <Header 
      onAbout={() => scrollTo(aboutRef)}
      onSkill={() => scrollTo(skillRef)}
      onExp={() => scrollTo(expRef)}
      onProj={() => scrollTo(projRef)}
      onResume={() => scrollTo(resumeRef)}
      buttonContent={buttonContent} 
      setButton={setButton} 
      lightMode={lightMode} 
      setLight={setLight}/>

      <MainContent 
      aboutRef={aboutRef}
      skillRef={skillRef}
      expRef={expRef}
      projRef={projRef}
      resumeRef={resumeRef}
      buttonContent={buttonContent} 
      setButton={setButton} 
      lightMode={lightMode}/>
    </>
  )
}