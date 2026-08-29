import Loader from "./components/Loader";
import Cursor from "./components/Cursor";
import ParticleField from "./components/ParticleField";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import AIShowcase from "./sections/AIShowcase";
import Stats from "./sections/Stats";
import Experience from "./sections/Experience";
import Education from "./sections/Education";
import Services from "./sections/Services";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <div className="cursor-none-desktop relative min-h-screen">
      <Loader />
      <Cursor />
      <ParticleField />
      <Nav />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <AIShowcase />
        <Stats />
        <Experience />
        <Education />
        <Services />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
