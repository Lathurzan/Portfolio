import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import NovaChat from './components/NovaChat';
import { useTheme } from './components/hooks/useTheme';

function App() {
  const { isDark, toggleTheme } = useTheme();

  // Ensure theme is applied on component mount
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className="min-h-screen bg-[var(--page)] text-[var(--copy)] transition-colors duration-300">
      <Header isDarkMode={isDark} toggleDarkMode={toggleTheme} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <NovaChat />
    </div>
  );
}

export default App;
