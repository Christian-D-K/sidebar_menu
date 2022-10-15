import { Flex, List } from '@chakra-ui/react'
import MenuFooter from './MenuFooter'
import MenuHeader from './MenuHeader'
import { menuContents } from '../../common/consts'
import NavItem from './NavItem'

const Sidebar = () => {
  console.log(menuContents)
  return (
    <Flex flexFlow='column' w='240px' bg='red' h='100vh'>
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
