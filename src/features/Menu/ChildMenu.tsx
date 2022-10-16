import { Flex, ListItem } from '@chakra-ui/react'
import { useAtom } from 'jotai'
import { menuContentsAtom } from '../../atom/MenuAtom'
import { childMenuContentsPropsType } from '../../types/Manu.type'

const ChildMenu = ({ id, parentId }: childMenuContentsPropsType) => {
  const [menuContents] = useAtom(menuContentsAtom)
  const navItemContens = menuContents.find(
    (menuContentsItem) => menuContentsItem.id === parentId
  )
  const childMenuItem = navItemContens?.childMenuContents?.find(
    (chlidContentsItem) => chlidContentsItem.id === id
  )
  return (
    <Flex
      color='gray.600'
      cursor='pointer'
      _hover={{ bg: 'gray.700', color: 'gray.200' }}
      pl={10}
    >
      <ListItem my={15} h={30} flexGrow={1} fontSize='lg' fontWeight='bold'>
        {childMenuItem?.name}
      </ListItem>
    </Flex>
  )
}

export default ChildMenu
