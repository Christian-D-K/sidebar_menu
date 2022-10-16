import { IconType } from 'react-icons'
export type navItemType = {
  id: string
  path?: string
  icon?: IconType
  name?: string
  SubMenuContents?: SubMenuContentsType[]
}

export type SubMenuContentsType = {
  id: string
  path?: string
  name?: string
  icon?: IconType | 'none'
}

export type SubMenuContentsPropsType = SubMenuContentsType & {
  parentId: string
}

export type menuContentsType = navItemType[]

export type headerPropsType = {
  toggleMenuOpenOrClose: () => void
}
