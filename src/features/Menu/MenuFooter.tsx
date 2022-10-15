import { useState } from 'react'
import { useAtom } from 'jotai'
import {
  Flex,
  Avatar,
  Text,
  Center,
  Icon,
  Stack,
  Button,
} from '@chakra-ui/react'
import { FiLogOut, FiUser } from 'react-icons/fi'
import { menuOpeningStateAtom } from '../../atom/MenuAtom'
import ExtendableButton from '../../components/element/ ExtendableButton'

const MenuFooter = () => {
  const [menuOpeningState, setMenuOpeningState] = useAtom(menuOpeningStateAtom)
  const { mainMenuState } = menuOpeningState
  const { isOpen } = mainMenuState
  return (
    <Flex h={250} w='100%' flexFlow='column' p={isOpen ? 5 : 0}>
      {isOpen ? (
        <FooterContentsWhenMenuOpen />
      ) : (
        <FooterContentsWhenMenuClosed />
      )}
    </Flex>
  )
}

const FooterContentsWhenMenuOpen = () => {
  const [isLeftButtonWide, setIsLeftButtonWide] = useState(true)

  const onMouseEvent = () => {
    setIsLeftButtonWide(!isLeftButtonWide)
  }

  return (
    <>
      <Flex
        flexFlow='row'
        border='2px'
        borderRadius='10px'
        borderColor='gray.200'
        py={4}
        pl={7}
        mb={1}
        cursor='pointer'
        color='white'
        transition={'1500ms'}
        _hover={{ bg: 'gray.200', color: 'gray.700' }}
      >
        <Center flexFlow='column' flexGrow={1}>
          <Avatar src='' name='Chris Kasahara' size='md' mr={2} />
          <Text fontSize='lg' fontWeight='bold'>
            Chris D Kasahara
          </Text>
        </Center>
      </Flex>
      <Flex>
        <Stack direction='row' spacing={2} py={1}>
          <ExtendableButton
            buttonText='LOGOUT'
            isExtend={isLeftButtonWide}
            extendWidth='280px'
            shrinkWidth='70px'
            height={12}
            icon={FiLogOut}
            onMouseEvent={!isLeftButtonWide ? onMouseEvent : () => {}}
          />
          <ExtendableButton
            buttonText='SWITCH ACC'
            isExtend={!isLeftButtonWide}
            extendWidth='280px'
            shrinkWidth='70px'
            height={12}
            icon={FiUser}
            onMouseEvent={isLeftButtonWide ? onMouseEvent : () => {}}
          />
        </Stack>
      </Flex>
    </>
  )
}

const FooterContentsWhenMenuClosed = () => {
  return (
    <>
      <Flex flexFlow='row' cursor='pointer' py={4}>
        <Center flexFlow='column' flexGrow={1}>
          <Avatar src='' name='Chris Kasahara' size='md' />
        </Center>
      </Flex>
      <Flex mb={1}>
        <Stack direction='column' spacing={2} px={4} pt={2}>
          <ExtendableButton shrinkWidth='50px' height={12} icon={FiLogOut} />
          <ExtendableButton shrinkWidth='50px' height={12} icon={FiUser} />
        </Stack>
      </Flex>
    </>
  )
}
export default MenuFooter
