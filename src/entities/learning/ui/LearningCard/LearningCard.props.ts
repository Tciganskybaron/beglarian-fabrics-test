import { IconType } from '@/assets/IconType';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface LearningCardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title: string;
  icon: IconType;
  color: 'red' | 'purple';
}
