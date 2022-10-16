import { useAtom } from 'jotai'
import { Text, Flex, Icon, Button } from '@chakra-ui/react'
import { FiMenu, FiSidebar } from 'react-icons/fi'
import { menuOpeningStateAtom } from '../../atom/MenuAtom'
import { headerPropsType } from '../../types/Manu.type'

const MenuHeader = ({ toggleMenuOpenOrClose }: headerPropsType) => {
  const [menuOpeningState, setMenuOpeningState] = useAtom(menuOpeningStateAtom)
  const { mainMenuState, subMenuState } = menuOpeningState
  const { isOpen } = mainMenuState

  const onClick = () => {
    toggleMenuOpenOrClose()
    setMenuOpeningState((value) => {
      /* メインメニューを閉じる */
      mainMenuState.isOpen = !mainMenuState.isOpen

      /* 開いているサブメニュー一覧の配列をクリアし、サブメニューを全て閉じる */
      subMenuState.openSubMenuNavItemIds = isOpen
        ? ['']
        : subMenuState.openSubMenuNavItemIds
      return {
        ...value,
        mainMenuState,
        subMenuState,
      }
    })
  }

  return (
    <Flex h='60px' pos='relative'>
      <Flex flexGrow={1} flexShrink={0} w={isOpen ? '250px' : '100%'}>
        <Text
          ml={5}
          my={2}
          py={1}
          fontSize='2xl'
          fontWeight='bold'
          color='gray.200'
        >
          {isOpen && 'THIS IS A HEADER'}
        </Text>
      </Flex>
      <Button
        w='50px'
        h='50px'
        pos='sticky'
        top={2}
        bg='gray.100'
        p={0}
        flexShrink={0}
        onClick={onClick}
        cursor='pointer'
        transition={'200ms'}
        justifyContent='flex-start'
        _hover={{ w: '100px' }}
        sx={
          isOpen
            ? {
                borderLeftRadius: 35,
                borderRightRadius: 0,
                justifyContent: 'flex-start',
              }
            : {
                borderLeftRadius: 0,
                borderRightRadius: 35,
                justifyContent: 'flex-end',
              }
        }
      >
        <Icon
          w='50px'
          h='25px'
          strokeWidth='2px'
          as={isOpen ? FiSidebar : FiMenu}
        />
      </Button>
    </Flex>
  )
}

export default MenuHeader
