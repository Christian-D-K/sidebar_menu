import { Flex, List } from '@chakra-ui/react'
import { useAtom } from 'jotai'
import MenuFooter from './MenuFooter'
import MenuHeader from './MenuHeader'
import { menuContents } from '../../common/consts'
import NavItem from './NavItem'
import { menuOpeningStateAtom } from '../../atom/MenuAtom'

const Sidebar = () => {
  const [menuOpeningState] = useAtom(menuOpeningStateAtom)
  const { isOpen } = menuOpeningState.mainMenuState

  return (
    <Flex
      flexFlow='column'
      w={isOpen ? '400px' : '50px'}
      bgGradient='linear(200deg, rgba(95, 2, 67), rgba(17,11,79,.3) 70.71%),
      linear-gradient(135deg, rgba(0,0,120,.8), rgba(0,255,0,0) 60.71%),
      linear-gradient(330deg, rgba(4,0,33), rgba(0,0,0) 80.71%)'
      h='100vh'
      overflowY={isOpen ? 'scroll' : 'visible'}
      pos='relative'
      sx={{
        '&::-webkit-scrollbar': {
          display: 'none',
        },
        '-ms-overflow-style': 'none',
      }}
    >
      <MenuHeader />
      <Flex flexGrow={1} flexFlow='column'>
        <List spacing={0} p={0} mt={0}>
          {menuContents.map((menuItem) => (
            <NavItem id={menuItem.id} key={menuItem.id} />
          ))}
        </List>
      </Flex>
      <MenuFooter />
    </Flex>
  )
}

export default Sidebar
