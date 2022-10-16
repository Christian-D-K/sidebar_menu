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
    SubMenuContents: [],
  },
  {
    id: 'sfbhst',
    path: '/dummy',
    icon: FiBook,
    name: 'PICTURE BOOK',
    SubMenuContents: [
      {
        id: 'nekemf',
        path: '/dummy',
        icon: 'none',
        name: 'T-REX',
      },
      {
        id: 'rfrgsg',
        path: '/dummy',
        icon: 'none',
        name: 'PTERANODON',
      },
      {
        id: 'qqarfw',
        path: '/dummy',
        icon: 'none',
        name: 'STEGOSAURUS',
      },
      {
        id: 'tdchdx',
        path: '/dummy',
        icon: 'none',
        name: 'TRICARETOPS',
      },
      {
        id: 'jrcsxs',
        path: '/dummy',
        icon: 'none',
        name: 'PARASAUROLOPHUS',
      },
      {
        id: 'eedddw',
        path: '/dummy',
        icon: 'none',
        name: 'SPINOSAURUS',
      },
      {
        id: 'ggegss',
        path: '/dummy',
        icon: 'none',
        name: 'BRACHIOSAURUS',
      },
      {
        id: 'eggfsg',
        path: '/dummy',
        icon: 'none',
        name: 'PLESIOSAURUS',
      },
    ],
  },
  {
    id: 'sebsfb',
    path: '/dummy',
    icon: FiFilm,
    name: 'HISTORY',
    SubMenuContents: [],
  },
  {
    id: 'ohaisd',
    path: '/dummy',
    icon: FiMessageSquare,
    name: 'CHAT',
    SubMenuContents: [],
  },
  {
    id: 'rhjmdk',
    path: '/dummy',
    icon: FiShoppingCart,
    name: 'SHOP',
    SubMenuContents: [
      {
        id: 'heidnw',
        path: '/dummy',
        icon: 'none',
        name: ' FAVORITE',
      },
      {
        id: 'eodskl',
        path: '/dummy',
        icon: 'none',
        name: 'ORDER HISTORY',
      },
      {
        id: 'pwpwod',
        path: '/dummy',
        icon: 'none',
        name: 'CART',
      },
    ],
  },
  {
    id: 'egavtb',
    path: '/dummy',
    icon: FiStar,
    name: 'ABOUT US',
    SubMenuContents: [],
  },
  {
    id: 'liemjd',
    path: '/dummy',
    icon: FiSettings,
    name: 'SETTING',
    SubMenuContents: [],
  },
]
