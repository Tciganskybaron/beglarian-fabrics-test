import BookText from './icons/book-text.svg';
import BookmarksUser from './icons/bookmarks-user.svg';
import ChartBar from './icons/chart-bar.svg';
import CheckCircle from './icons/check-circle.svg';
import Crown from './icons/crown.svg';
import Fire from './icons/fire.svg';
import GameController from './icons/game-controller.svg';
import GraduationCap from './icons/graduation-cap.svg';
import Home from './icons/home.svg';
import LExam from './icons/l-exam.svg';
import Left from './icons/left.svg';
import Pen from './icons/pen.svg';
import Ranking from './icons/ranking.svg';
import Right from './icons/right.svg';
import RocketLaunch from './icons/rocket-launch.svg';
import Route from './icons/route.svg';
import Turn from './icons/turn.svg';
import TVPlay from './icons/tv-play.svg';
import User from './icons/user.svg';

type iconComponent = {
  [key: string]: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
};

export const IconComponent: iconComponent = {
  BookText,
  BookmarksUser,
  ChartBar,
  CheckCircle,
  Crown,
  Fire,
  GameController,
  GraduationCap,
  Home,
  LExam,
  Left,
  Pen,
  Ranking,
  Right,
  RocketLaunch,
  Route,
  Turn,
  TVPlay,
  User,
};
