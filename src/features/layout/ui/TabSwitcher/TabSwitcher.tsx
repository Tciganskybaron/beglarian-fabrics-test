import text from '@/shared/constants/text';
import styles from './TabSwitcher.module.css';

export const TabSwitcher = () => {
  return (
    <div className={styles.tab}>
      <div className={styles.text}>{text.TESTS}</div>
    </div>
  );
};
