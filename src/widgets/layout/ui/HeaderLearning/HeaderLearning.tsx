import Link from 'next/link';
import text from '@/shared/constants/text';
import { Icon } from '@/shared/ui';

import styles from './HeaderLearning.module.css';

export const HeaderLearning = () => {
  return (
    <div className={styles.header}>
      <Link href={'/'}>
        <Icon icon={'Left'} size={24} />
      </Link>
      <h1 className={styles.h1}>{text.LEARNING}</h1>
    </div>
  );
};
