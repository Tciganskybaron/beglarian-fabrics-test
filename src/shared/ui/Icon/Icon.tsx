import cn from 'classnames';

import { IconComponent } from '@/assets/index';

import { IconProps } from './Icon.props';
import styles from './Icon.module.css';

export const Icon = ({
  icon,
  size = 24,
  className,
  ...props
}: IconProps): JSX.Element => {
  const Component = IconComponent[icon];
  return (
    <Component
      style={{ width: size, height: size }}
      className={cn(styles.icon, className)}
      {...props}
    />
  );
};
