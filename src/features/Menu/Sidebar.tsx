import React from 'react'
import { Flex, List, chakra, shouldForwardProp } from '@chakra-ui/react'
import { useAtom } from 'jotai'
import MenuFooter from './MenuFooter'
import MenuHeader from './MenuHeader'
import { menuContents } from '../../common/consts'
import NavItem from './NavItem'
import { menuOpeningStateAtom } from '../../atom/MenuAtom'
import { motion, isValidMotionProp, useAnimation } from 'framer-motion'

const AnimationBoxForSidebar = chakra(motion.div, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
})

const Sidebar = () => {
  console.log('rendering')
  const [menuOpeningState] = useAtom(menuOpeningStateAtom)
  const { isOpen } = menuOpeningState.mainMenuState
  const controlAnimation = useAnimation()

  const toggleMenuOpenOrClose = () => {
    controlAnimation.start(
      isOpen
        ? {
            width: ['400px', '80px'],
          }
        : {
            width: ['80px', '400px'],
          }
    )
  }

  return (
    <AnimationBoxForSidebar
      initial={{ width: isOpen ? '400px' : '80px' }}
      animate={controlAnimation}
      // @ts-ignore no problem in operation, although type error appears.
      transition={{
        duration: 0.2,
      }}
    >
      <Flex
        overflowY={isOpen ? 'scroll' : 'visible'}
        overflowX={isOpen ? 'hidden' : 'visible'}
        flexFlow='column'
        flexShrink={0}
        bgGradient='linear(260deg, rgba(0, 0, 0), rgba(25,25,25,.9) 100.71%)'
        h='100vh'
        sx={{
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        }}
        userSelect='none'
      >
        <MenuHeader toggleMenuOpenOrClose={toggleMenuOpenOrClose} />
        <Flex flexGrow={1} flexFlow='column'>
          <List spacing={0} p={0} mt={0}>
            {menuContents.map((menuItem) => (
              <NavItem id={menuItem.id} key={menuItem.id} />
            ))}
          </List>
        </Flex>
        <MenuFooter />
      </Flex>
    </AnimationBoxForSidebar>
  )
}

export default Sidebar
