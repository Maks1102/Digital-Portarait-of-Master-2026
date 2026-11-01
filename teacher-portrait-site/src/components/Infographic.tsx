import { useState, useMemo } from 'react';
import { timelineEvents, teacherAwards } from '../data/achievements';
import styles from './Infographic.module.css';

type YearFilter = 'all' | 2023 | 2024 | 2025 | 2026;
type DirectionFilter = 'all' | 'programming' | 'robotics' | 'science' | 'art' | 'energy' | 'patriotic';

const directionLabels: Record<DirectionFilter, string> = {
  all: 'Все направления',
  programming: 'Программирование',
  robotics: 'Робототехника',
  science: 'Научно-технические проекты',
  art: 'Творческие проекты',
  energy: 'Энергосбережение',
  patriotic: 'Патриотические мероприятия'
};

function Infographic() {
  const [yearFilter, setYearFilter] = useState<YearFilter>('all');
  const [directionFilter, setDirectionFilter] = useState<DirectionFilter>('all');

  const filteredStudentEvents = useMemo(() => {
    return timelineEvents.filter(event => {
      if (event.type !== 'student') return false;
      const matchesYear = yearFilter === 'all' || event.year === yearFilter;
      const matchesDirection = directionFilter === 'all' || event.category === directionFilter;
      return matchesYear && matchesDirection;
    });
  }, [yearFilter, directionFilter]);

  const stats = useMemo(() => {
    const studentEvents = timelineEvents.filter(e => e.type === 'student');
    const teacherEvents = timelineEvents.filter(e => e.type === 'teacher');
    
    const byYear: Record<number, { count: number; places: { 1: number; 2: number; 3: number } }> = {};
    const byDirection: Record<string, number> = {};
    const byLevel = { regional: 0, republic: 0 };

    studentEvents.forEach(event => {
      if (!byYear[event.year]) {
        byYear[event.year] = { count: 0, places: { 1: 0, 2: 0, 3: 0 } };
      }
      byYear[event.year].count++;
      
      if (event.achievement) {
        byYear[event.year].places[event.achievement.place as 1 | 2 | 3]++;
        
        const dir = event.achievement.direction;
        byDirection[dir] = (byDirection[dir] || 0) + 1;

        if (event.location?.includes('республиканск') || event.achievement?.competition?.includes('Республиканск')) {
          byLevel.republic++;
        } else {
          byLevel.regional++;
        }
      }
    });

    return {
      totalStudentEvents: studentEvents.length,
      totalTeacherAwards: teacherEvents.length,
      byYear,
      byDirection,
      byLevel
    };
  }, [filteredStudentEvents]);

  const maxYearCount = Math.max(...Object.values(stats.byYear).map(y => y.count), 1);

  return (
    <section id="infographic" className={styles.infographic}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h2 className={styles.title}>Результаты в цифрах</h2>
          <p className={styles.subtitle}>Интерактивная панель достижений педагогической деятельности</p>
        </header>

        <div className={styles.filters}>
          <div className={styles.filterGroup}>
            <span className={styles.filterLabel}>Год:</span>
            <div className={styles.filterButtons}>
              {(['all', 2023, 2024, 2025, 2026] as YearFilter[]).map(year => (
                <button
                  key={year}
                  className={`${styles.filterBtn} ${yearFilter === year ? styles.active : ''}`}
                  onClick={() => setYearFilter(year)}
                >
                  {year === 'all' ? 'Все годы' : year}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.filterGroup}>
            <span className={styles.filterLabel}>Направление:</span>
            <div className={styles.filterButtons}>
              {(Object.keys(directionLabels) as DirectionFilter[]).map(dir => (
                <button
                  key={dir}
                  className={`${styles.filterBtn} ${directionFilter === dir ? styles.active : ''}`}
                  onClick={() => setDirectionFilter(dir)}
                >
                  {directionLabels[dir]}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.cardValue}>{stats.totalStudentEvents}</div>
            <div className={styles.cardLabel}>Записей о достижениях учащихся</div>
            <div className={styles.cardHint}>Количество конкурсных результатов в таймлайне</div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardValue}>{teacherAwards.length}</div>
            <div className={styles.cardLabel}>Наград педагога</div>
            <div className={styles.cardHint}>Личные награды и достижения</div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardValue}>{filteredStudentEvents.length}</div>
            <div className={styles.cardLabel}>Отфильтрованных событий</div>
            <div className={styles.cardHint}>По текущим параметрам фильтрации</div>
          </div>
        </div>

        <div className={styles.charts}>
          <div className={styles.chartCard}>
            <h3 className={styles.chartTitle}>Распределение по годам</h3>
            <div className={styles.barChart}>
              {[2023, 2024, 2025, 2026].map(year => {
                const data = stats.byYear[year] || { count: 0, places: { 1: 0, 2: 0, 3: 0 } };
                const height = (data.count / maxYearCount) * 100;
                return (
                  <div key={year} className={styles.barContainer}>
                    <div className={styles.barValue}>{data.count}</div>
                    <div className={styles.barWrapper}>
                      <div 
                        className={styles.bar}
                        style={{ height: `${height}%` }}
                        aria-label={`${year}: ${data.count} событий`}
                      >
                        <div className={styles.barSegments}>
                          {data.places[1] > 0 && <div className={styles.segmentGold} style={{ height: `${(data.places[1] / data.count) * 100}%` }}></div>}
                          {data.places[2] > 0 && <div className={styles.segmentSilver} style={{ height: `${(data.places[2] / data.count) * 100}%` }}></div>}
                          {data.places[3] > 0 && <div className={styles.segmentBronze} style={{ height: `${(data.places[3] / data.count) * 100}%` }}></div>}
                        </div>
                      </div>
                    </div>
                    <div className={styles.barLabel}>{year}</div>
                  </div>
                );
              })}
            </div>
            <div className={styles.chartLegend}>
              <span className={styles.legendItem}><span className={styles.legendGold}></span> I место</span>
              <span className={styles.legendItem}><span className={styles.legendSilver}></span> II место</span>
              <span className={styles.legendItem}><span className={styles.legendBronze}></span> III место</span>
            </div>
          </div>

          <div className={styles.chartCard}>
            <h3 className={styles.chartTitle}>По уровням конкурсов</h3>
            <div className={styles.donutChart}>
              <svg viewBox="0 0 100 100" className={styles.donut}>
                <circle cx="50" cy="50" r="40" fill="none" stroke="var(--bg-light)" strokeWidth="12"/>
                <circle 
                  cx="50" cy="50" r="40" 
                  fill="none" 
                  stroke="var(--accent-green)" 
                  strokeWidth="12"
                  strokeDasharray={`${(stats.byLevel.regional / stats.totalStudentEvents) * 251.2} 251.2`}
                  strokeDashoffset="0"
                  transform="rotate(-90 50 50)"
                />
                <circle 
                  cx="50" cy="50" r="40" 
                  fill="none" 
                  stroke="var(--accent-red)" 
                  strokeWidth="12"
                  strokeDasharray={`${(stats.byLevel.republic / stats.totalStudentEvents) * 251.2} 251.2`}
                  strokeDashoffset={`-${(stats.byLevel.regional / stats.totalStudentEvents) * 251.2}`}
                  transform="rotate(-90 50 50)"
                />
              </svg>
              <div className={styles.donutCenter}>
                <span className={styles.donutValue}>{stats.totalStudentEvents}</span>
                <span className={styles.donutLabel}>всего</span>
              </div>
            </div>
            <div className={styles.donutLegend}>
              <div className={styles.donutLegendItem}>
                <span className={styles.donutColorGreen}></span>
                <span>Областной: {stats.byLevel.regional}</span>
              </div>
              <div className={styles.donutLegendItem}>
                <span className={styles.donutColorRed}></span>
                <span>Республиканский: {stats.byLevel.republic}</span>
              </div>
            </div>
          </div>

          <div className={styles.chartCard}>
            <h3 className={styles.chartTitle}>По направлениям</h3>
            <div className={styles.directionsList}>
              {(Object.entries(stats.byDirection) as [string, number][])
                .sort((a, b) => b[1] - a[1])
                .map(([dir, count]) => (
                  <div key={dir} className={styles.directionItem}>
                    <span className={styles.directionName}>{directionLabels[dir as DirectionFilter] || dir}</span>
                    <div className={styles.directionBar}>
                      <div 
                        className={styles.directionFill} 
                        style={{ width: `${(count / stats.totalStudentEvents) * 100}%` }}
                      ></div>
                    </div>
                    <span className={styles.directionCount}>{count}</span>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Infographic;