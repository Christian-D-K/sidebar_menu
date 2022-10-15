import { IconType } from 'react-icons'
export type navItemType = {
  id: string
  path?: string
  icon?: IconType
  name?: string
  childMenuContents?: childMenuContentsType[]
}

export type childMenuContentsType = {
  id: string
  path?: string
  name?: string
  icon?: IconType | 'none'
}

export type childMenuContentsPropsType = childMenuContentsType & {
  parentId: string
}

export type menuContentsType = navItemType[]
