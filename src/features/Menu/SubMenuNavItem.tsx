import React from 'react'
import { Flex, ListItem } from '@chakra-ui/react'
import { useAtom } from 'jotai'
import Link from 'next/link'
import { menuContentsAtom } from '../../atom/MenuAtom'
import { SubMenuContentsPropsType } from '../../types/Manu.type'

const SubMenuNavItem = ({ id, parentId }: SubMenuContentsPropsType) => {
  const [menuContents] = useAtom(menuContentsAtom)
  const navItemContens = menuContents.find(
    (menuContentsItem) => menuContentsItem.id === parentId
  )
  const childMenuItem = navItemContens?.SubMenuContents?.find(
    (chlidContentsItem) => chlidContentsItem.id === id
  )

  return (
    <Link href={childMenuItem?.path ? childMenuItem.path : '/'}>
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
    </Link>
  )
}

export default SubMenuNavItem
