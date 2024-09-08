import { FooterItem } from '@/entities/layout/ui';
import styles from './FooterMain.module.css';

export const FooterMain = () => {
  return (
    <div className={styles.footer}>
      <FooterItem text={'Home'} icon={'Home'} url={'/'} active />
      <FooterItem text={'Your plan'} icon={'Route'} url={'/'} active={false} />
      <FooterItem
        text={'Leaderboard'}
        icon={'Ranking'}
        url={'/'}
        active={false}
      />
      <FooterItem text={'Profile'} icon={'User'} url={'/'} active={false} />
    </div>
  );
};
