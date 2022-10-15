import { ListIcon, Flex, ListItem, Center, Icon } from '@chakra-ui/react'
import { useAtom } from 'jotai'
import { menuContentsAtom } from '../../atom/MenuAtom'
import { navItemType } from '../../types/Manu.type'
import { FiChevronDown } from 'react-icons/fi'

const NavItem = ({ id }: navItemType) => {
  const [menuContents] = useAtom(menuContentsAtom)
  const navItemContens = menuContents.filter(
    (menuContentsItem) => menuContentsItem.id === id
  )[0]
  return (
    <Flex _hover={{ bg: 'gray' }}>
      <ListItem
        my={15}
        h={30}
        flexGrow={1}
        flexFlow='column'
        fontSize='lg'
        fontWeight='bold'
        color='gray.300'
      >
        <ListIcon
          mx={15}
          h={5}
          w={5}
          strokeWidth={2}
          as={navItemContens.icon}
        />
        {navItemContens?.name}
      </ListItem>
      <Center w='70px'>
        <Icon as={FiChevronDown} h={5} w={5} strokeWidth='3px' />
      </Center>
    </Flex>
  )
}

export default NavItem
