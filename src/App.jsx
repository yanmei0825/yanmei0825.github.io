import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
// import About from "./components/About";
import Projects from "./components/Projects";
import Engineering from "./components/Engineering";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import StarsBackground from "./components/StarsBackground";

function App() {
  return (
    
   <div className="min-h-screen bg-[#0b1120] text-white overflow-x-hidden">
      <StarsBackground />

      <Navbar />

      <Hero />
      {/* <About /> */}
      <Projects />
      <Engineering />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;