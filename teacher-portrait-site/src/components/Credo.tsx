import { pedagogicalCredo } from '../data/teacherData';
import styles from './Credo.module.css';

function Credo() {
  return (
    <section className={styles.credo}>
      <div className={styles.container}>
        <div className={styles.ornamentTop} aria-hidden="true">
          <svg viewBox="0 0 200 20" preserveAspectRatio="none">
            <path d="M0 10 Q50 0 100 10 T200 10" fill="none" stroke="var(--accent-red)" strokeWidth="1.5"/>
            <path d="M0 10 Q50 20 100 10 T200 10" fill="none" stroke="var(--accent-green)" strokeWidth="1.5"/>
          </svg>
        </div>
        
        <div className={styles.content}>
          <h2 className={styles.title}>Педагогическое кредо</h2>
          
          <blockquote className={styles.mainQuote}>
            <p>«{pedagogicalCredo}»</p>
          </blockquote>

          <div className={styles.threeColumns}>
            <div className={styles.column}>
              <div className={styles.columnIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                  <line x1="8" y1="21" x2="16" y2="21"/>
                  <line x1="12" y1="17" x2="12" y2="21"/>
                </svg>
              </div>
              <h3 className={styles.columnTitle}>Цифровые компетенции</h3>
              <p className={styles.columnText}>
                Обучаю программированию на Python, робототехнике на платформе TRIK, веб-разработке и цифровому искусству. 
                Помогаю учащимся освоить инструменты, которые станут основой их профессионального будущего.
              </p>
            </div>

            <div className={styles.column}>
              <div className={styles.columnIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 8h1a4 4 0 0 1 0 8h-1"/>
                  <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/>
                  <line x1="6" y1="1" x2="6" y2="4"/>
                  <line x1="10" y1="1" x2="10" y2="4"/>
                  <line x1="14" y1="1" x2="14" y2="4"/>
                </svg>
              </div>
              <h3 className={styles.columnTitle}>Профессиональное развитие</h3>
              <p className={styles.columnText}>
                Развиваю самостоятельность, исследовательские навыки и критическое мышление. 
                Учу не просто следовать инструкциям, а создавать собственные проекты и находить нестандартные решения.
              </p>
            </div>

            <div className={styles.column}>
              <div className={styles.columnIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/>
                  <line x1="4" y1="22" x2="4" y2="15"/>
                </svg>
              </div>
              <h3 className={styles.columnTitle}>Патриотическое воспитание</h3>
              <p className={styles.columnText}>
                Воспитываю сердце патриота через уважение к истории и культуре Беларуси, 
                участие в гражданско-патриотических акциях и мероприятиях, изучение отечественного научно-технического наследия.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.ornamentBottom} aria-hidden="true">
          <svg viewBox="0 0 200 20" preserveAspectRatio="none">
            <path d="M0 10 Q50 0 100 10 T200 10" fill="none" stroke="var(--accent-green)" strokeWidth="1.5"/>
            <path d="M0 10 Q50 20 100 10 T200 10" fill="none" stroke="var(--accent-red)" strokeWidth="1.5"/>
          </svg>
        </div>
      </div>
    </section>
  );
}

export default Credo;