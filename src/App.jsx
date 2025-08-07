import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="App">
      <Navigation />
      
      <main>
        <section id="home">
          <Hero />
        </section>
        
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>

      <ScrollToTop />
    </div>
  );
}

export default App;
