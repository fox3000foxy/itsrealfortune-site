import About from './components/About';
import BackgroundAnimation from './components/BackgroundAnimation';
import Collaborations from './components/Collaborations';
import Contact from './components/Contact';
import Events from './components/Events';
import Footer from './components/Footer';
import Header from './components/Header';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';
import Timeline from './components/Timeline';
import { useImageProtection } from './hooks/useImageProtection';
import './styles/main.css';

function App() {
  useImageProtection();

  return (
    <>
      <BackgroundAnimation />
      <Header />
      <main>
        <About />
        <Skills />
        <Projects />
        <Events />
        <Timeline />
        <Testimonials />
        <Collaborations />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;


