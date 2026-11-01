import { useState } from 'react';
import styles from './Header.module.css';

interface HeaderProps {
  activeSection: string;
}

const navItems = [
  { id: 'hero', label: 'Главная' },
  { id: 'biography', label: 'Обо мне' },
  { id: 'timeline', label: 'Путь педагога' },
  { id: 'achievements', label: 'Достижения учащихся' },
  { id: 'infographic', label: 'Инфографика' },
  { id: 'library', label: 'Методическая библиотека' },
  { id: 'awards', label: 'Награды' },
];

function Header({ activeSection }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <svg className={styles.logoIcon} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <rect x="2" y="2" width="36" height="36" rx="4" stroke="currentColor" strokeWidth="2"/>
            <path d="M10 20L16 26L30 12" stroke="var(--accent-green)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="20" cy="20" r="14" stroke="var(--accent-red)" strokeWidth="1.5" strokeDasharray="4 2"/>
          </svg>
          <span className={styles.logoText}>Код признания</span>
        </div>

        <nav className={styles.nav} aria-label="Основная навигация">
          <ul className={styles.navList}>
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  className={`${styles.navLink} ${activeSection === item.id ? styles.active : ''}`}
                  onClick={() => handleNavClick(item.id)}
                  aria-current={activeSection === item.id ? 'true' : undefined}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className={styles.mobileToggle}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
        >
          <span className={`${styles.hamburger} ${mobileMenuOpen ? styles.open : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
      </div>

      {mobileMenuOpen && (
        <div className={styles.mobileMenu}>
          <nav aria-label="Мобильная навигация">
            <ul className={styles.mobileNavList}>
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    className={`${styles.mobileNavLink} ${activeSection === item.id ? styles.active : ''}`}
                    onClick={() => handleNavClick(item.id)}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;