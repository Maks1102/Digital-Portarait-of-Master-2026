import { libraryCategories } from '../data/achievements';
import styles from './Library.module.css';

function Library() {
  return (
    <section id="library" className={styles.library}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h2 className={styles.title}>Методическая библиотека</h2>
          <p className={styles.subtitle}>Каталог методических материалов и ресурсов</p>
        </header>

        <div className={styles.notice}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <circle cx="12" cy="12" r="10"/>
            <line x1="12" y1="16" x2="12" y2="12"/>
            <line x1="12" y1="8" x2="12.01" y2="8"/>
          </svg>
          <p>Методические материалы будут добавлены по мере их подготовки и публикации. Для пополнения библиотеки необходимо получить подтверждённые материалы от автора.</p>
        </div>

        <div className={styles.categories}>
          {libraryCategories.map((category) => (
            <div key={category.id} className={styles.categoryCard}>
              <div className={styles.categoryIcon}>
                {category.id === 'python' && (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="16 18 22 12 16 6"/>
                    <polyline points="8 6 2 12 8 18"/>
                  </svg>
                )}
                {category.id === 'robotics' && (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="3" y="8" width="18" height="12" rx="2"/>
                    <circle cx="9" cy="14" r="2"/>
                    <circle cx="15" cy="14" r="2"/>
                    <path d="M9 6V4M15 6V4M12 8V4"/>
                  </svg>
                )}
                {category.id === 'methodology' && (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                    <line x1="8" y1="7" x2="16" y2="7"/>
                    <line x1="8" y1="11" x2="14" y2="11"/>
                  </svg>
                )}
                {category.id === 'science' && (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M9 3h6v6l3 9H6L9 9V3z"/>
                    <path d="M9 3h6"/>
                    <circle cx="10" cy="14" r="1"/>
                    <circle cx="14" cy="13" r="1"/>
                  </svg>
                )}
                {category.id === 'patriotic' && (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/>
                    <line x1="4" y1="22" x2="4" y2="15"/>
                  </svg>
                )}
              </div>
              <h3 className={styles.categoryName}>{category.name}</h3>
              <p className={styles.categoryDescription}>{category.description}</p>
              <div className={styles.categoryPlaceholder}>
                <span className={styles.placeholderIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                    <line x1="12" y1="8" x2="12" y2="16"/>
                    <line x1="8" y1="12" x2="16" y2="12"/>
                  </svg>
                </span>
                <span>Материалы появятся после подтверждения</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Library;