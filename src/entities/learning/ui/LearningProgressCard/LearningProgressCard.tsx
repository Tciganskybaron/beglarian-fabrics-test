import { IconCircle, Icon } from '@/shared/ui';
import styles from './LearningProgressCard.module.css';
import { LearningProgressCardProps } from './LearningProgressCard.props';
import Link from 'next/link';

export const LearningProgressCard = ({
  category,
  progress,
  totalQuestions,
}: LearningProgressCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles['header-block']}>
          <IconCircle
            icon={'GraduationCap'}
            color={'contrast-secondary'}
            sizeCircle={'medium'}
          />
          <div className={styles.info}>
            <h3 className={styles.title}>Learning</h3>
            <p className={styles.category}>Category {category}</p>
          </div>
        </div>
        <Link href="/learning" className={styles.arrow}>
          <Icon icon={'Right'} color={'contrast'} />
        </Link>
      </div>
      <p className={styles.questions}>
        {progress} questions out of {totalQuestions} passed
      </p>
      <div className={styles.progress}></div>
    </div>
  );
};
