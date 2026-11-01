import styles from './Hero.module.css';

function Hero() {
  const handleScrollToBiography = () => {
    document.getElementById('biography')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToTimeline = () => {
    document.getElementById('timeline')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.backgroundPattern} aria-hidden="true">
        <svg viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(45, 45, 45, 0.05)" strokeWidth="1"/>
            </pattern>
            <pattern id="ornament" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M0 50 Q25 25 50 50 T100 50" fill="none" stroke="var(--accent-red)" strokeWidth="0.5" opacity="0.2"/>
              <path d="M0 50 Q25 75 50 50 T100 50" fill="none" stroke="var(--accent-green)" strokeWidth="0.5" opacity="0.2"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)"/>
          <rect width="100%" height="100%" fill="url(#ornament)"/>
        </svg>
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Код признания: <span className={styles.titleAccent}>Анна Янковская</span>
          </h1>
          <p className={styles.subtitle}>
            Педагог дополнительного образования · программирование и робототехника · Лида
          </p>
          <p className={styles.intro}>
            Проект о педагоге, который соединяет цифровые технологии с профессиональным развитием учащихся 
            и воспитанием уважения к белорусской культуре и истории.
          </p>
          
          <blockquote className={styles.quote}>
            <p>«Обучаю программиста, развиваю профессионала, воспитываю сердце патриота»</p>
          </blockquote>

          <div className={styles.actions}>
            <button className={styles.btnPrimary} onClick={handleScrollToBiography}>
              Познакомиться с историей
            </button>
            <button className={styles.btnSecondary} onClick={handleScrollToTimeline}>
              Увидеть достижения
            </button>
          </div>
        </div>

        <div className={styles.portraitWrapper}>
          <div className={styles.portraitFrame}>
            <div className={styles.ornamentCorner1} aria-hidden="true"></div>
            <div className={styles.ornamentCorner2} aria-hidden="true"></div>
            <div className={styles.ornamentCorner3} aria-hidden="true"></div>
            <div className={styles.ornamentCorner4} aria-hidden="true"></div>
            <img 
              src="/images/image.png" 
              alt="Портрет Янковской Анны Владимировны"
              className={styles.portrait}
            />
          </div>
        </div>
      </div>

      <div className={styles.scrollIndicator} aria-hidden="true">
        <span></span>
      </div>
    </section>
  );
}

export default Hero;