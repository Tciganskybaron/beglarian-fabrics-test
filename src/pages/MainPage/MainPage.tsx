//import styles from './MainPage.module.css';

import { IconCircle } from '@/shared/ui';
import { FooterMain, HeaderMain } from '@/widgets/layout/ui';

export const MainPage = () => {
  return (
    <>
      <HeaderMain />
      <IconCircle icon={'LExam'} color={'red'} />
      <IconCircle icon={'RocketLaunch'} color={'purple'} />
      <IconCircle icon={'TVPlay'} color={'purple'} />
      <IconCircle icon={'Turn'} color={'purple'} />
      <IconCircle icon={'GameController'} color={'purple'} />

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
      />
      <FooterMain />
    </>
  );
};
