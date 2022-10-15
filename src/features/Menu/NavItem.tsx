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
        fontSize='lg'
        transition={'300ms'}
        _hover={{ bg: 'gray.200', color: 'gray.700' }}
      >
        <ListItem my={15} h={30} flexGrow={1} flexFlow='row' fontWeight='bold'>
          <ListIcon
            mx='25px'
            h={6}
            w={6}
            strokeWidth={2}
            as={navItemContens.icon}
          />
          {isMainMenuOpen && navItemContens?.name}
        </ListItem>
        {navItemContens.childMenuContents &&
          navItemContens.childMenuContents?.length > 0 &&
          isMainMenuOpen && (
            <Center
              w='80px'
              onClick={onClick}
              transition={'300ms'}
              _hover={{ bg: 'gray.500', color: 'gray.200' }}
            >
              <Icon as={FiChevronDown} h={5} w={5} strokeWidth='3px' />
            </Center>
          )}
      </Flex>
      {isMainMenuOpen && isSubMenuOpen && (
        <Flex
          flexGrow={1}
          flexFlow='column'
          bg='white'
          bgGradient='linear(230deg, rgba(120, 120, 120, .7), rgba(250,250,250, .6) 50%),'
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
