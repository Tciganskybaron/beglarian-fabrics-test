import { text } from '@/shared/constants';
import styles from './HeaderMain.module.css';
import { IconButton } from '@/shared/ui/IconButton/IconButton';

export const HeaderMain = () => {
  return (
    <div className={styles.header}>
      <h1 className={styles.h1}>{text.RAY}</h1>
      <div className={styles.boxButton}>
        <IconButton icon={'Crown'} />
        <IconButton icon={'Fire'} count={13} />
      </div>
    </div>
  );
};
