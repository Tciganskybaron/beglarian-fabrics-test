//import cn from 'classnames';
import { LearningCard, LearningModeCard } from '@/entities/learning/ui';
import styles from './LearningDashboard.module.css';
import text from '@/shared/constants/text';

export const LearninDashboard = () => {
  return (
    <div className={styles.box}>
      <div className={styles.cardBox}>
        <LearningCard
          className={styles.card}
          icon={'LExam'}
          title={text.DVSA}
          color={'red'}
        />
        <LearningCard
          className={styles.card}
          icon={'RocketLaunch'}
          title={text.EXPRESS}
          color={'purple'}
        />
        <LearningCard
          className={styles.card}
          icon={'TVPlay'}
          title={text.HAZARD}
          color={'purple'}
        />
        <LearningCard
          className={styles.card}
          icon={'Turn'}
          title={text.ROAD}
          color={'purple'}
        />
        <LearningCard
          className={styles.card}
          icon={'GameController'}
          title={text.MULTIPLAYER + ' ' + text.LEARNING}
          color={'purple'}
        />
      </div>
      <div className={styles.modeBox}>
        <LearningModeCard icon={'Pen'} title={text.MISTAKES} />
        <LearningModeCard icon={'ChartBar'} title={text.STATICTICS} />
        <LearningModeCard
          icon={'BookText'}
          title={text.HIGHWAY + ' ' + text.CODE}
        />
        <LearningModeCard icon={'BookmarksUser'} title={text.FAVORITES} />
      </div>
    </div>
  );
};
