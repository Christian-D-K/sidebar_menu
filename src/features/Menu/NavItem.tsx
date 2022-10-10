import { ListIcon, Flex, ListItem, Box, Center } from '@chakra-ui/react'
import { useAtom } from 'jotai'
import { menuContentsAtom } from '../../atom/MenuAtom'
import { navItemType } from '../../types/Manu.type'

const NavItem = ({ id }: navItemType) => {
  const [menuContents] = useAtom(menuContentsAtom)
  const navItemContens = menuContents.filter(
    (menuContentsItem) => menuContentsItem.id === id
  )[0]
  return (
    <Flex bg='yellow' _hover={{ bg: 'gray' }}>
      <ListItem my={15} h={30} flexGrow={1} flexFlow='column'>
        <ListIcon mx={15} color='green.500' />
        {navItemContens?.name}
      </ListItem>
      <Center>
        <Box m={15}>↓</Box>
      </Center>
    </Flex>
  )
}

export default NavItem
