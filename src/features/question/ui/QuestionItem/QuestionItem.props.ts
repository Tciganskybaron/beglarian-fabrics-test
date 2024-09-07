import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface QuestionItemProps
  extends Omit<
    DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
    'onClick'
  > {
  number: number;
  isChecked: boolean;
  onClick: (number: number) => void;
}
