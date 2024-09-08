import cn from 'classnames';

import styles from './FooterItem.module.css';
import Link from 'next/link';

import { FooterItemProps } from './FooterItem.props';
import { Icon } from '@/shared/ui';

export const FooterItem = ({ icon, text, url, active }: FooterItemProps) => {
  return (
    <Link className={styles.link} href={url}>
      <div
        className={cn(styles.icon, {
          [styles.active]: active,
        })}
      >
        <Icon iconName={icon} />
      </div>
      <span
        className={cn(styles.text, {
          [styles.active]: active,
        })}
      >
        {text}
      </span>
    </Link>
  );
};
