import styles from './LearningPage.module.css';

import { TabSwitcher } from '@/features/layout/ui';

import { HeaderLearning } from '@/widgets/layout/ui';
import { TestBox } from '@/widgets/tests/ui';

export const LearningPage = () => {
  return (
    <div>
      <HeaderLearning />
      <div className={styles.tabBox}>
        <TabSwitcher />
      </div>
      <TestBox />
    </div>
  );
};
