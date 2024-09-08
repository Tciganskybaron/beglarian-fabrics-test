import styles from './LearningPage.module.css';

import { TabSwitcher } from '@/features/layout/ui';

import { HeaderLearning } from '@/widgets/layout/ui';
import { QuestionBox } from '@/widgets/learning/ui';

export const LearningPage = () => {
  return (
    <div className={styles.main}>
      <HeaderLearning />
      <div className={styles.tabBox}>
        <TabSwitcher />
      </div>
      <QuestionBox />
    </div>
  );
};
