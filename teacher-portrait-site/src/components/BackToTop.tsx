import styles from './BackToTop.module.css';

interface BackToTopProps {
  visible: boolean;
}

function BackToTop({ visible }: BackToTopProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <button
      className={styles.button}
      onClick={scrollToTop}
      aria-label="Вернуться наверх"
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="18,15 12,9 6,15"/>
      </svg>
    </button>
  );
}

export default BackToTop;