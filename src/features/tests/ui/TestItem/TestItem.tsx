import { TestItemProps } from './TestItem.props';
import styles from './TestItem.module.css';

import { Icon } from '@/shared/ui';

export const TestItem = ({ number, isChecked, onClick }: TestItemProps) => {
  return (
    <div onClick={() => onClick(number)} className={styles.item}>
      <span className={styles.number}>{number}</span>
      {isChecked && (
        <span className={styles.icon}>
          <Icon iconName={'CheckCircle'} size={20} />
        </span>
      )}
      <div className={styles.moonShape}></div>
    </div>
  );
};
