import { useAtom } from 'jotai'
import { Text, Center, Flex, Icon, Button } from '@chakra-ui/react'
import { FiSidebar } from 'react-icons/fi'
import { menuOpeningStateAtom } from '../../atom/MenuAtom'

const MenuHeader = () => {
  const [menuOpeningState, setMenuOpeningState] = useAtom(menuOpeningStateAtom)
  const { mainMenuState } = menuOpeningState
  const { isOpen } = mainMenuState

  const onClick = () => {
    setMenuOpeningState((value) => {
      mainMenuState.isOpen = !mainMenuState.isOpen
      return {
        ...value,
        mainMenuState,
      }
    })
  }

  return (
    <Flex h='60px' pos='relative' flexShrink={0}>
      <Flex>
        <Text
          ml={5}
          my={2}
          py={1}
          fontSize='2xl'
          fontWeight='bold'
          color='gray.200'
          display={isOpen ? 'block' : 'none'}
        >
          Dinosaur
        </Text>
      </Flex>
      <Button
        w='50px'
        h='50px'
        pos='absolute'
        bg='gray.100'
        borderLeftRadius={isOpen ? 35 : 0}
        borderRightRadius={isOpen ? 0 : 35}
        right={isOpen ? 0 : '-50px'}
        onClick={onClick}
        cursor='pointer'
      >
        <Center>
          <Icon w='50px' h='25px' strokeWidth='2px' as={FiSidebar} />
        </Center>
      </Button>
    </Flex>
  )
}

export default MenuHeader
