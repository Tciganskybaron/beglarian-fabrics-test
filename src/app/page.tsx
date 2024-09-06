import styles from './page.module.css';

import { IconComponent } from '@/assets/index';

const LoadingIconComponent = IconComponent.Fire;

export default function Home() {
  return (
    <>
      <div className={styles.page}>HOME</div>
      <LoadingIconComponent />
    </>
  );
}
