import { teacherAwards } from '../data/achievements';
import styles from './Awards.module.css';

function Awards() {
  return (
    <section id="awards" className={styles.awards}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h2 className={styles.title}>Награды педагога</h2>
          <p className={styles.subtitle}>Личные награды и профессиональные достижения Янковской А.В.</p>
        </header>

        <div className={styles.grid}>
          {teacherAwards.map((award, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.cardDecoration} aria-hidden="true">
                <svg viewBox="0 0 100 100">
                  <polygon points="50,5 61,40 98,40 68,62 79,97 50,75 21,97 32,62 2,40 39,40"/>
                </svg>
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{award.name}</h3>
                <p className={styles.cardOrganization}>{award.organization}</p>
                {award.documentNumber && (
                  <p className={styles.cardNumber}>{award.documentNumber}</p>
                )}
              </div>
              <div className={styles.scanNotice}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                  <circle cx="8.5" cy="8.5" r="1.5"/>
                  <polyline points="21,15 16,10 5,21"/>
                </svg>
                <span>Скан не предоставлен</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Awards;