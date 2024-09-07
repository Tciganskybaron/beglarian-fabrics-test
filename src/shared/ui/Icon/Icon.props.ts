import { DetailedHTMLProps, SVGAttributes } from 'react';

import { IconType } from '@/assets/index';

export interface IconProps
  extends DetailedHTMLProps<SVGAttributes<SVGSVGElement>, SVGSVGElement> {
  iconName: IconType;
  size?: 20 | 24 | 28;
}
