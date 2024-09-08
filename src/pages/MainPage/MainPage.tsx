import styles from './MainPage.module.css';
import { LearningProgressCard } from '@/entities/learning/ui/LearningProgressCard/LearningProgressCard';
import { LearninDashboard } from '@/features/learning/ui';
import { FooterMain, HeaderMain } from '@/widgets/layout/ui';

export const MainPage = () => {
  return (
    <div className={styles.main}>
      <div className={styles.content}>
        <HeaderMain />
        <LearningProgressCard
          category={'B'}
          progress={112}
          totalQuestions={730}
        />
        <LearninDashboard />
      </div>
      <div className={styles.footer}>
        <FooterMain />
      </div>
    </div>
  );
};
