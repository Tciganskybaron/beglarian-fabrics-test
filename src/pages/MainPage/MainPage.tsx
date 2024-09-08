//import styles from './MainPage.module.css';

import { LearninDashboard } from '@/features/learning/ui';
//import { IconCircle } from '@/shared/ui';
import { FooterMain, HeaderMain } from '@/widgets/layout/ui';

export const MainPage = () => {
  return (
    <>
      <HeaderMain />
      <LearninDashboard />
      {/* 
      <IconCircle
        icon={'Pen'}
        color={'contrast'}
        sizeCircle={'medium'}
        sizeIcon={'medium'}
      />
      <IconCircle
        icon={'ChartBar'}
        color={'contrast'}
        sizeCircle={'medium'}
        sizeIcon={'medium'}
      />
      <IconCircle
        icon={'BookText'}
        color={'contrast'}
        sizeCircle={'medium'}
        sizeIcon={'medium'}
      />
      <IconCircle
        icon={'BookmarksUser'}
        color={'contrast'}
        sizeCircle={'medium'}
        sizeIcon={'medium'}
      /> */}
      <FooterMain />
    </>
  );
};
