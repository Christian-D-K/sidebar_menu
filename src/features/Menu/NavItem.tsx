import { ListIcon, Flex, ListItem, Center, Icon, List } from '@chakra-ui/react'
import { useAtom } from 'jotai'
import { menuContentsAtom, menuOpeningStateAtom } from '../../atom/MenuAtom'
import { navItemType } from '../../types/Manu.type'
import { FiChevronDown } from 'react-icons/fi'
import ChildMenu from './ChildMenu'

const NavItem = ({ id }: navItemType) => {
  const [menuContents] = useAtom(menuContentsAtom)
  const [menuOpeningState, setMenuOpeningState] = useAtom(menuOpeningStateAtom)
  const { mainMenuState } = menuOpeningState
  const { subMenuState } = menuOpeningState
  const isMainMenuOpen = mainMenuState.isOpen
  const isSubMenuOpen = subMenuState.isAnyOpen

  const onClick = () => {
    navItemContens.childMenuContents &&
      navItemContens.childMenuContents?.length > 0 &&
      setMenuOpeningState((value) => {
        subMenuState.isAnyOpen = !subMenuState.isAnyOpen
        return {
          ...value,
          subMenuState: subMenuState,
        }
      })
  }

  const navItemContens = menuContents.filter(
    (menuContentsItem) => menuContentsItem.id === id
  )[0]
  return (
    <Flex flexFlow='column'>
      <Flex
        color='gray.200'
        cursor='pointer'
        flexFlow='row'
        _hover={{ bg: 'gray.200', color: 'gray.700' }}
      >
        <ListItem
          my={15}
          h={30}
          flexGrow={1}
          flexFlow='row'
          fontSize='lg'
          fontWeight='bold'
        >
          <ListIcon
            mx={15}
            h={5}
            w={5}
            strokeWidth={2}
            as={navItemContens.icon}
          />
          {isMainMenuOpen && navItemContens?.name}
        </ListItem>
        {navItemContens.childMenuContents &&
          navItemContens.childMenuContents?.length > 0 &&
          isSubMenuOpen && (
            <Center w='70px' onClick={onClick}>
              <Icon as={FiChevronDown} h={5} w={5} strokeWidth='3px' />
            </Center>
          )}
      </Flex>
      {isMainMenuOpen && isSubMenuOpen && (
        <Flex
          flexGrow={1}
          flexFlow='column'
          bg='white'
          bgGradient='linear(200deg, rgba(160, 160, 160, .5), rgba(250,250,250, .7) 40.71%),
      linear-gradient(130deg, rgba(200, 200, 200, .4), rgba(250, 250, 250, .5) 80.71%),
      linear-gradient(320deg, rgba(250, 250, 250, .5), rgba(150, 150, 150, .5) 60.71%),'
        >
          <List>
            {navItemContens.childMenuContents &&
              navItemContens.childMenuContents.map((childMenuContentsItem) => (
                <ChildMenu
                  id={childMenuContentsItem.id}
                  key={childMenuContentsItem.id}
                  parentId={navItemContens.id}
                />
              ))}
          </List>
        </Flex>
      )}
    </Flex>
  )
}

export default NavItem
