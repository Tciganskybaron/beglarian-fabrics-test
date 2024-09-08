import { QuestionItemProps } from './QuestionItem.props';
import styles from './QuestionItem.module.css';

import { Icon } from '@/shared/ui';

export const QuestionItem = ({
  number,
  isChecked,
  onClick,
}: QuestionItemProps) => {
  return (
    <div onClick={() => onClick(number)} className={styles.item}>
      <span className={styles.number}>{number}</span>
      {isChecked && (
        <span className={styles.icon}>
          <Icon icon={'CheckCircle'} size={20} />
        </span>
      )}
      <div className={styles.moonShape}></div>
    </div>
  );
};
