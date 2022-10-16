import { ReactElement } from 'react'

import { Flex } from '@chakra-ui/react'
import Sidebar from '../features/Menu/Sidebar'

type LayoutProps = Required<{
  readonly children: ReactElement
}>

const Layout = ({ children }: LayoutProps) => {
  return (
    <Flex
      flexFlow='row'
      bgGradient='linear(200deg, rgba(95, 2, 67, .8), rgba(17,11,79,.2)30%),linear-gradient(135deg, rgba(0,0,90,.5), rgba(120,0,100,.4) 90%),linear-gradient(330deg, rgba(0,0,20, .9), rgba(0,0,0) 40%)'
    >
      <Sidebar />
      {children}
    </Flex>
  )
}

export default Layout
