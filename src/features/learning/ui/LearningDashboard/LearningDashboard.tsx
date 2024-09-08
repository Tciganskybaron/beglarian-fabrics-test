//import cn from 'classnames';
import { LearningCard, LearningModeCard } from '@/entities/learning/ui';
import styles from './LearningDashboard.module.css';

export const LearninDashboard = () => {
  return (
    <div className={styles.box}>
      <div className={styles.cardBox}>
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
      <div className={styles.modeBox}>
        <LearningModeCard icon={'Pen'} title="Mistakes" />
        <LearningModeCard icon={'ChartBar'} title="Statistics" />
        <LearningModeCard icon={'BookText'} title="Highway Code" />
        <LearningModeCard icon={'BookmarksUser'} title="Favorites" />
      </div>
    </div>
  );
};
