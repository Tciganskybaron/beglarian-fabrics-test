import { IconType } from '@/assets/IconType';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface LearningModeCardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title: string;
  icon: IconType;
}
