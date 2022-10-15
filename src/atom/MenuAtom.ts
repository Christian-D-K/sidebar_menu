import { atom } from 'jotai'
import { menuContents } from '../common/consts'

export const menuContentsAtom = atom(menuContents)
export const menuOpeningStateAtom = atom({
  mainMenuState: {
    isOpen: true,
  },
  subMenuState: {
    isAnyOpen: false,
    OpenSubMenuId: '',
  },
})
