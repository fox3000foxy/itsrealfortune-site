import { lazy } from 'react';
import "./App.css";
import "./styles/main.css";

const About = lazy(() => import('./components/About'));
const BackgroundAnimation = lazy(() => import('./components/BackgroundAnimation'));
const Collaborations = lazy(() => import('./components/Collaborations'));
const Contact = lazy(() => import('./components/Contact'));
const Events = lazy(() => import('./components/Events'));
const Footer = lazy(() => import('./components/Footer'));
const Header = lazy(() => import('./components/Header'));
const Projects = lazy(() => import('./components/Projects'));
const Skills = lazy(() => import('./components/Skills'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const Timeline = lazy(() => import('./components/Timeline'));

function App() {
  return (
    // <Suspense fallback={<div>Loading...</div>}>
    <>
      <BackgroundAnimation />
      <Header />
      <main className="page-content">
        <About />
        <Projects />
        <Collaborations />
        <Timeline />
        <Events />
        <Skills />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
    // </Suspense>
  );
}

export default App;


