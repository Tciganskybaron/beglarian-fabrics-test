import cn from 'classnames';

import { IconComponent } from '@/assets/index';

import { IconButtonProps } from './IconButton.props';
import styles from './IconButton.module.css';

const iconSizes = {
  small: 20,
  medium: 24,
} as const;

export const IconButton = ({
  icon,
  count,
  size = 'medium',
  ...props
}: IconButtonProps): JSX.Element => {
  const Component = IconComponent[icon];
  return (
    <button className={cn(styles.button)} {...props}>
      <Component style={{ width: iconSizes[size], height: iconSizes[size] }} />
      {count && <span className={styles.count}>{count}</span>}
    </button>
  );
};
