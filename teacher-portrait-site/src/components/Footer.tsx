import { teacherInfo } from '../data/teacherData';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.ornament} aria-hidden="true">
        <svg viewBox="0 0 1200 40" preserveAspectRatio="none">
          <path d="M0 20 Q150 0 300 20 T600 20 T900 20 T1200 20" fill="none" stroke="var(--accent-red)" strokeWidth="1.5" opacity="0.3"/>
          <path d="M0 20 Q150 40 300 20 T600 20 T900 20 T1200 20" fill="none" stroke="var(--accent-green)" strokeWidth="1.5" opacity="0.3"/>
        </svg>
      </div>

      <div className={styles.container}>
        <div className={styles.logo}>
          <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <rect x="2" y="2" width="36" height="36" rx="4" stroke="currentColor" strokeWidth="2"/>
            <path d="M10 20L16 26L30 12" stroke="var(--accent-green)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="20" cy="20" r="14" stroke="var(--accent-red)" strokeWidth="1.5" strokeDasharray="4 2"/>
          </svg>
          <span>Код признания</span>
        </div>

        <nav className={styles.nav} aria-label="Навигация в футере">
          <ul className={styles.navList}>
            <li><a href="#hero">Главная</a></li>
            <li><a href="#biography">Обо мне</a></li>
            <li><a href="#timeline">Путь педагога</a></li>
            <li><a href="#achievements">Достижения учащихся</a></li>
            <li><a href="#infographic">Инфографика</a></li>
            <li><a href="#library">Библиотека</a></li>
            <li><a href="#awards">Награды</a></li>
          </ul>
        </nav>

        <div className={styles.info}>
          <p className={styles.teacher}>{teacherInfo.name}</p>
          <p className={styles.workplace}>{teacherInfo.workplace}</p>
        </div>

        <div className={styles.credits}>
          <p>Проект создан для участия в областном цифровом конкурсе «Цифровой портрет Мастера: Летопись женского успеха»</p>
          <p>Номинация №1 «Код признания: проект о моём Педагоге»</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;