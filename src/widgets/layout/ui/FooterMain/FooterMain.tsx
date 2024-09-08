import { FooterItem } from '@/entities/layout/ui';
import styles from './FooterMain.module.css';
import text from '@/shared/constants/text';

export const FooterMain = () => {
  return (
    <div className={styles.footer}>
      <FooterItem text={text.HOME} icon={'Home'} url={'/'} active />
      <FooterItem text={text.PLAN} icon={'Route'} url={'/'} active={false} />
      <FooterItem
        text={text.LEADERBOARD}
        icon={'Ranking'}
        url={'/'}
        active={false}
      />
      <FooterItem text={text.PROFILE} icon={'User'} url={'/'} active={false} />
    </div>
  );
};
