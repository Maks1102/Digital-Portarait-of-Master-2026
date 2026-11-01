// Типы для проекта

export interface TeacherInfo {
  name: string;
  birthYear: number;
  qualificationCategory: string;
  workplace: string;
  positions: string[];
  interestGroup: string;
  directions: string[];
  education: Education[];
  startDate: string;
}

export interface Education {
  year: number;
  institution: string;
  specialty: string;
  qualification: string;
}

export interface TimelineEvent {
  id: string;
  date: string;
  year: number;
  title: string;
  description: string;
  category: 'education' | 'award' | 'student' | 'robotics' | 'programming' | 'science' | 'patriotic';
  type: 'teacher' | 'student';
  achievement?: StudentAchievement;
  award?: TeacherAward;
  location?: string;
  competition?: string;
}

export interface StudentAchievement {
  studentName: string;
  competition: string;
  place: number;
  direction: 'programming' | 'robotics' | 'science' | 'art' | 'energy' | 'patriotic';
  nomination?: string;
  location?: string;
}

export interface TeacherAward {
  name: string;
  organization: string;
  documentNumber?: string;
}

export interface LibraryCategory {
  id: string;
  name: string;
  description: string;
  items: LibraryItem[];
}

export interface LibraryItem {
  id: string;
  title: string;
  type: 'article' | 'presentation' | 'methodology' | 'link' | 'file';
  description: string;
  tags: string[];
}

export interface InfographicData {
  totalCompetitions: number;
  teacherAwards: number;
  studentWins: number;
  byYear: YearData[];
  byLevel: { level: string; count: number }[];
  byDirection: { direction: string; count: number }[];
}

export interface YearData {
  year: number;
  count: number;
  places: { 1: number; 2: number; 3: number };
}