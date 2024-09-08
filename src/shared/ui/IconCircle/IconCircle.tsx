import cn from 'classnames';

import { IconComponent } from '@/assets/index';

import { IconCircleProps } from './IconCircle.props';
import styles from './IconCircle.module.css';

const iconSizes = {
  small: 24,
  medium: 28,
  large: 32,
} as const;

const CircleSizes = {
  small: 40,
  medium: 58,
} as const;

export const IconCircle = ({
  icon,
  color,
  sizeCircle = 'small',
  sizeIcon = 'small',
  className,
  ...props
}: IconCircleProps): JSX.Element => {
  const Component = IconComponent[icon];
  return (
    <div
      className={cn(styles.circle, className, {
        [styles.red]: color === 'red',
        [styles.purple]: color === 'purple',
        [styles.contrast]: color === 'contrast',
        [styles['contrast-secondary']]: color === 'contrast-secondary',
      })}
      style={{
        width: CircleSizes[sizeCircle],
        height: CircleSizes[sizeCircle],
        fill: 'none',
      }}
      {...props}
    >
      <Component
        style={{
          width: iconSizes[sizeIcon],
          height: iconSizes[sizeIcon],
          opacity: 1,
        }}
      />
    </div>
  );
};
