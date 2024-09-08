//import cn from 'classnames';
import { LearningCard } from '@/entities/learning/ui/indes';
import styles from './LearningDashboard.module.css';

export const LearninDashboard = () => {
  return (
    <div className={styles.box}>
      <LearningCard
        className={styles.card}
        icon={'LExam'}
        title="DVSA Exam"
        color={'red'}
      />
      <LearningCard
        className={styles.card}
        icon={'RocketLaunch'}
        title="Express mode"
        color={'purple'}
      />
      <LearningCard
        className={styles.card}
        icon={'TVPlay'}
        title="Hazard perception"
        color={'purple'}
      />
      <LearningCard
        className={styles.card}
        icon={'Turn'}
        title="Road signs"
        color={'purple'}
      />
      <LearningCard
        className={styles.card}
        icon={'GameController'}
        title="Multiplayer Learning"
        color={'purple'}
      />
    </div>
  );
};
