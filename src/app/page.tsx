import CursorGlow from '@/components/CursorGlow';
import Navbar from '@/components/Navbar';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Projects from '@/components/sections/Projects';
import Certifications from '@/components/sections/Certifications';
import Leadership from '@/components/sections/Leadership';
import Blog from '@/components/sections/Blog';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Certifications />
        <Leadership />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
