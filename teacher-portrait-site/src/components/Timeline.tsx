import { useState, useMemo } from 'react';
import { timelineEvents } from '../data/achievements';
import { TimelineEvent } from '../types';
import styles from './Timeline.module.css';

type FilterType = 'all' | 'education' | 'award' | 'student' | 'robotics' | 'programming' | 'science' | 'patriotic';

const filterLabels: Record<FilterType, string> = {
  all: 'Все события',
  education: 'Образование',
  award: 'Награды педагога',
  student: 'Достижения учащихся',
  robotics: 'Робототехника',
  programming: 'Программирование',
  science: 'Научные проекты',
  patriotic: 'Патриотические'
};

function Timeline() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(null);

  const filteredEvents = useMemo(() => {
    const sorted = [...timelineEvents].sort((a, b) => a.year - b.year || a.date.localeCompare(b.date));
    
    if (activeFilter === 'all') return sorted;
    if (activeFilter === 'student') {
      return sorted.filter(e => e.type === 'student');
    }
    if (activeFilter === 'award') {
      return sorted.filter(e => e.type === 'teacher' && e.category === 'award');
    }
    return sorted.filter(e => e.category === activeFilter);
  }, [activeFilter]);

  const handleEventClick = (event: TimelineEvent) => {
    setSelectedEvent(event);
  };

  const closeModal = () => {
    setSelectedEvent(null);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <section id="timeline" className={styles.timeline}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h2 className={styles.title}>Летопись профессионального пути</h2>
          <p className={styles.subtitle}>Интерактивная шкала времени достижений и событий</p>
        </header>

        <div className={styles.filters} role="tablist" aria-label="Фильтры событий">
          {(Object.keys(filterLabels) as FilterType[]).map((filter) => (
            <button
              key={filter}
              className={`${styles.filterBtn} ${activeFilter === filter ? styles.active : ''}`}
              onClick={() => setActiveFilter(filter)}
              role="tab"
              aria-selected={activeFilter === filter}
            >
              {filterLabels[filter]}
            </button>
          ))}
        </div>

        <div className={styles.eventsList} role="tabpanel">
          {filteredEvents.map((event) => (
            <button
              key={event.id}
              className={`${styles.eventCard} ${styles[event.type]} ${styles[event.category]}`}
              onClick={() => handleEventClick(event)}
              aria-label={`Открыть подробности: ${event.title}`}
            >
              <div className={styles.eventMarker}>
                <span className={styles.eventYear}>{event.year}</span>
              </div>
              <div className={styles.eventContent}>
                <span className={styles.eventDate}>{event.date}</span>
                <h3 className={styles.eventTitle}>{event.title}</h3>
                <span className={`${styles.eventBadge} ${styles[event.type]}`}>
                  {event.type === 'teacher' ? 'Награда педагога' : 'Достижение учащихся'}
                </span>
              </div>
            </button>
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <div className={styles.emptyState}>
            <p>События не найдены для выбранного фильтра</p>
          </div>
        )}
      </div>

      {selectedEvent && (
        <div 
          className={styles.modal}
          onClick={handleBackdropClick}
          onKeyDown={handleKeyDown}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div className={styles.modalContent}>
            <button 
              className={styles.modalClose}
              onClick={closeModal}
              aria-label="Закрыть окно"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
            
            <div className={styles.modalHeader}>
              <span className={styles.modalDate}>{selectedEvent.date}</span>
              <span className={`${styles.modalBadge} ${styles[selectedEvent.type]}`}>
                {selectedEvent.type === 'teacher' ? 'Награда педагога' : 'Достижение учащихся'}
              </span>
            </div>
            
            <h3 id="modal-title" className={styles.modalTitle}>{selectedEvent.title}</h3>
            <p className={styles.modalDescription}>{selectedEvent.description}</p>
            
            {selectedEvent.location && (
              <p className={styles.modalLocation}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                {selectedEvent.location}
              </p>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

export default Timeline;