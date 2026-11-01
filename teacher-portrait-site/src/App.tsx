import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Biography from './components/Biography';
import Timeline from './components/Timeline';
import StudentAchievements from './components/StudentAchievements';
import Infographic from './components/Infographic';
import Library from './components/Library';
import Awards from './components/Awards';
import Credo from './components/Credo';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import styles from './App.module.css';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'biography', 'timeline', 'achievements', 'infographic', 'library', 'awards'];
      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }

      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={styles.app}>
      <Header activeSection={activeSection} />
      <main>
        <Hero />
        <Biography />
        <Credo />
        <Timeline />
        <StudentAchievements />
        <Infographic />
        <Library />
        <Awards />
      </main>
      <Footer />
      <BackToTop visible={showBackToTop} />
    </div>
  );
}

export default App;