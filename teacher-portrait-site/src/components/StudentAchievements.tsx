import { useState, useMemo } from 'react';
import { studentAchievements } from '../data/achievements';
import { StudentAchievement } from '../types';
import styles from './StudentAchievements.module.css';

type DirectionFilter = 'all' | 'programming' | 'robotics' | 'science' | 'art' | 'energy' | 'patriotic';

const directionLabels: Record<DirectionFilter, string> = {
  all: 'Все направления',
  programming: 'Программирование',
  robotics: 'Робототехника',
  science: 'Научные и технические проекты',
  art: 'Творческие инициативы',
  energy: 'Энергосбережение',
  patriotic: 'Патриотические'
};

const placeLabels = ['', 'I место', 'II место', 'III место'];

function StudentAchievements() {
  const [directionFilter, setDirectionFilter] = useState<DirectionFilter>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedAchievement, setSelectedAchievement] = useState<StudentAchievement | null>(null);

  const filteredAchievements = useMemo(() => {
    return studentAchievements.filter(achievement => {
      const matchesDirection = directionFilter === 'all' || achievement.direction === directionFilter;
      const matchesSearch = searchQuery === '' || 
        achievement.studentName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        achievement.competition.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesDirection && matchesSearch;
    });
  }, [directionFilter, searchQuery]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setSelectedAchievement(null);
    }
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setSelectedAchievement(null);
    }
  };

  return (
    <section id="achievements" className={styles.achievements}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h2 className={styles.title}>Победители и призёры</h2>
          <p className={styles.subtitle}>Галерея достижений учащихся под руководством Янковской А.В.</p>
        </header>

        <div className={styles.controls}>
          <div className={styles.searchWrapper}>
            <svg className={styles.searchIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <circle cx="11" cy="11" r="8"/>
              <line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
            <input
              type="search"
              className={styles.searchInput}
              placeholder="Поиск по имени или названию конкурса..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Поиск по участникам и конкурсам"
            />
          </div>

          <div className={styles.filters} role="tablist" aria-label="Фильтр по направлениям">
            {(Object.keys(directionLabels) as DirectionFilter[]).map((direction) => (
              <button
                key={direction}
                className={`${styles.filterBtn} ${directionFilter === direction ? styles.active : ''}`}
                onClick={() => setDirectionFilter(direction)}
                role="tab"
                aria-selected={directionFilter === direction}
              >
                {directionLabels[direction]}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.grid} role="tabpanel">
          {filteredAchievements.map((achievement, index) => (
            <button
              key={index}
              className={styles.card}
              onClick={() => setSelectedAchievement(achievement)}
              aria-label={`Подробнее о результате: ${achievement.studentName}`}
            >
              <div className={styles.cardHeader}>
                <span className={`${styles.placeBadge} ${styles[`place${achievement.place}`]}`}>
                  {placeLabels[achievement.place]}
                </span>
                <span className={styles.directionTag}>
                  {directionLabels[achievement.direction as DirectionFilter]}
                </span>
              </div>
              <div className={styles.cardInitials}>
                {achievement.studentName.split(', ').map((name, i) => (
                  <span key={i} className={styles.initials}>
                    {name.split(' ').map(n => n[0]).join('.')}
                  </span>
                ))}
              </div>
              <h3 className={styles.cardStudent}>{achievement.studentName}</h3>
              <p className={styles.cardCompetition}>{achievement.competition}</p>
              {achievement.location && (
                <p className={styles.cardLocation}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  {achievement.location}
                </p>
              )}
            </button>
          ))}
        </div>

        {filteredAchievements.length === 0 && (
          <div className={styles.emptyState}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <circle cx="11" cy="11" r="8"/>
              <line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
            <p>Ничего не найдено. Попробуйте изменить параметры поиска.</p>
          </div>
        )}
      </div>

      {selectedAchievement && (
        <div 
          className={styles.modal}
          onClick={handleBackdropClick}
          onKeyDown={handleKeyDown}
          role="dialog"
          aria-modal="true"
        >
          <div className={styles.modalContent}>
            <button 
              className={styles.modalClose}
              onClick={() => setSelectedAchievement(null)}
              aria-label="Закрыть окно"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>

            <div className={styles.modalHeader}>
              <span className={`${styles.placeBadge} ${styles[`place${selectedAchievement.place}`]}`}>
                {placeLabels[selectedAchievement.place]}
              </span>
              <span className={styles.directionTag}>
                {directionLabels[selectedAchievement.direction as DirectionFilter]}
              </span>
            </div>

            <h3 className={styles.modalTitle}>{selectedAchievement.studentName}</h3>
            <p className={styles.modalCompetition}>{selectedAchievement.competition}</p>
            {selectedAchievement.location && (
              <p className={styles.modalLocation}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                {selectedAchievement.location}
              </p>
            )}

            <div className={styles.modalNote}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <circle cx="12" cy="12" r="10"/>
                <line x1="12" y1="16" x2="12" y2="12"/>
                <line x1="12" y1="8" x2="12.01" y2="8"/>
              </svg>
              <p>Учащиеся под руководством Янковской А.В. принимают участие в конкурсах и демонстрируют высокие результаты в области программирования, робототехники и научно-технического творчества.</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default StudentAchievements;