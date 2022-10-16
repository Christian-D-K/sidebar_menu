import { IconType } from 'react-icons'
export type extendableButtonPropsType = {
  buttonText?: string
  isExtend?: boolean
  extendWidth?: string
  shrinkWidth?: string
  height?: string | number
  icon?: IconType
  onMouseEvent?: () => void
}
