import { atom } from 'jotai'
import { menuContents } from '../common/consts'

export const menuContentsAtom = atom(menuContents)

/* メニューの開閉状態を保持するAtom */
export const menuOpeningStateAtom = atom({
  /* サイドメニュー自体の開閉状態を保持する */
  mainMenuState: {
    isOpen: true,
  },
  /* サブメニューがオープンしているメニューアイテムのIDを保持する */
  subMenuState: {
    openSubMenuNavItemIds: [''],
  },
})

export const animationReady = atom(() => {})
