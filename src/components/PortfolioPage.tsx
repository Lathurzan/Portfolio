import { useEffect } from 'react';
import Header from './Header';
import Projects from './Projects';
import Footer from './Footer';
import NovaChat from './NovaChat';
import { useTheme } from './hooks/useTheme';

const PortfolioPage = () => {
  const { isDark, toggleTheme } = useTheme();

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
      <main>
        <Projects showAll />
      </main>
      <Footer />
      <NovaChat />
    </div>
  );
};

export default PortfolioPage;
