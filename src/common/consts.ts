import { menuContentsType } from '../types/Manu.type'
import {
  FiHome,
  FiBook,
  FiFilm,
  FiMessageSquare,
  FiShoppingCart,
  FiSettings,
  FiStar,
} from 'react-icons/fi'
export const menuContents: menuContentsType = [
  {
    id: 'vsfvbs',
    path: '/',
    icon: FiHome,
    name: 'HOME',
    childMenuContents: [],
  },
  {
    id: 'sfbhst',
    path: '/',
    icon: FiBook,
    name: 'PICTURE BOOK',
    childMenuContents: [],
  },
  {
    id: 'sebsfb',
    path: '/',
    icon: FiFilm,
    name: 'HISTORY',
    childMenuContents: [],
  },
  {
    id: 'ohaisd',
    path: '/',
    icon: FiMessageSquare,
    name: 'CHAT',
    childMenuContents: [],
  },
  {
    id: 'rhjmdk',
    path: '/',
    icon: FiShoppingCart,
    name: 'SHOP',
    childMenuContents: [],
  },
  {
    id: 'egavtb',
    path: '/',
    icon: FiStar,
    name: 'ABOUT US',
    childMenuContents: [],
  },
  {
    id: 'liemjd',
    path: '/',
    icon: FiSettings,
    name: 'SETTING',
    childMenuContents: [],
  },
]
