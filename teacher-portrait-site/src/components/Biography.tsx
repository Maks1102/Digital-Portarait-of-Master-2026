import { teacherInfo } from '../data/teacherData';
import styles from './Biography.module.css';

function Biography() {
  return (
    <section id="biography" className={styles.biography}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h2 className={styles.title}>Обо мне</h2>
          <p className={styles.subtitle}>Биография и профессиональный профиль</p>
        </header>

        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
            </div>
            <h3 className={styles.cardTitle}>Основные сведения</h3>
            <dl className={styles.infoList}>
              <div className={styles.infoItem}>
                <dt>ФИО</dt>
                <dd>{teacherInfo.name}</dd>
              </div>
              <div className={styles.infoItem}>
                <dt>Год рождения</dt>
                <dd>{teacherInfo.birthYear}</dd>
              </div>
              <div className={styles.infoItem}>
                <dt>Квалификационная категория</dt>
                <dd>{teacherInfo.qualificationCategory}</dd>
              </div>
              <div className={styles.infoItem}>
                <dt>Место работы</dt>
                <dd>{teacherInfo.workplace}</dd>
              </div>
              <div className={styles.infoItem}>
                <dt>Должности</dt>
                <dd>{teacherInfo.positions.join(', ')}</dd>
              </div>
              <div className={styles.infoItem}>
                <dt>Объединение по интересам</dt>
                <dd>{teacherInfo.interestGroup}</dd>
              </div>
            </dl>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                <path d="M6 12v5c0 2 6 3 6 3s6-1 6-3v-5"/>
              </svg>
            </div>
            <h3 className={styles.cardTitle}>Образование</h3>
            <div className={styles.educationList}>
              {teacherInfo.education.map((edu, index) => (
                <div key={index} className={styles.educationItem}>
                  <span className={styles.eduYear}>{edu.year}</span>
                  <div className={styles.eduDetails}>
                    <p className={styles.eduInstitution}>{edu.institution}</p>
                    <p className={styles.eduSpecialty}>{edu.specialty}</p>
                    <p className={styles.eduQualification}>Квалификация: {edu.qualification}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 6v6l4 2"/>
              </svg>
            </div>
            <h3 className={styles.cardTitle}>Начало работы</h3>
            <p className={styles.startDate}>
              В ГУО «Лидский районный центр творчества детей и молодёжи» с {teacherInfo.startDate}
            </p>
          </div>

          <div className={`${styles.card} ${styles.cardWide}`}>
            <div className={styles.cardIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
              </svg>
            </div>
            <h3 className={styles.cardTitle}>Направления деятельности</h3>
            <ul className={styles.directionsList}>
              {teacherInfo.directions.map((direction, index) => (
                <li key={index} className={styles.directionItem}>
                  <span className={styles.directionBullet}></span>
                  {direction}
                </li>
              ))}
            </ul>
          </div>

          <div className={`${styles.card} ${styles.cardWide}`}>
            <div className={styles.cardIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                <path d="M2 17l10 5 10-5"/>
                <path d="M2 12l10 5 10-5"/>
              </svg>
            </div>
            <h3 className={styles.cardTitle}>Профессиональные компетенции</h3>
            <div className={styles.competenceGrid}>
              <div className={styles.competence}>
                <h4>Методическая работа</h4>
                <p>Методическое обеспечение программирования и робототехники, проектирование образовательного процесса</p>
              </div>
              <div className={styles.competence}>
                <h4>Образовательные технологии</h4>
                <p>Выбор и оценка образовательных технологий, методов и средств обучения</p>
              </div>
              <div className={styles.competence}>
                <h4>Поддержка педагогов</h4>
                <p>Методическое сопровождение и профессиональный рост педагогов центра</p>
              </div>
              <div className={styles.competence}>
                <h4>Работа с одарёнными</h4>
                <p>Подготовка мотивированных школьников Лидского района к обучению в Национальном детском технопарке</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Biography;