import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface TestItemProps
  extends Omit<
    DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
    'onClick'
  > {
  number: number;
  isChecked: boolean;
  onClick: (number: number) => void;
}
