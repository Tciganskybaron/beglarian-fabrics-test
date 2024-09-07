import { DetailedHTMLProps, HTMLAttributes } from 'react';

import { IconType } from '@/assets/index';

export interface IconCircleProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  icon: IconType;
  color: 'red' | 'contrast' | 'contrast-secondary' | 'purple';
  sizeCircle?: 'small' | 'medium';
  sizeIcon?: 'small' | 'medium' | 'large';
}
