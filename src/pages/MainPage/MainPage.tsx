import styles from './MainPage.module.css';

import { IconComponent } from '@/assets/index';

const LoadingIconComponent = IconComponent.Fire;

export const MainPage = () => {
  return (
    <>
      <div className={styles.page}>HOME</div>
      <LoadingIconComponent />
    </>
  );
};
