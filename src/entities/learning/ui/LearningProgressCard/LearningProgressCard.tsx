'use client';

import { IconCircle, Icon, Loader } from '@/shared/ui';
import styles from './LearningProgressCard.module.css';
import { LearningProgressCardProps } from './LearningProgressCard.props';
import Link from 'next/link';
import text from '@/shared/constants/text';

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
            <h3 className={styles.title}>{text.LEARNING}</h3>
            <p className={styles.category}>{`${text.CATEGORY} ${category}`}</p>
          </div>
        </div>
        <Link href="/learning" className={styles.arrow}>
          <Icon icon={'Right'} color={'contrast'} />
        </Link>
      </div>
      <p className={styles.questions}>
        {progress} {text.QUESTIONS_OUT} {totalQuestions} {text.PASSED}
      </p>
      <div className={styles.progress}>
        <Loader filledCount={6} />
      </div>
    </div>
  );
};
