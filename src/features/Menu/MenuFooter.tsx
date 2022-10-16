import { useState } from 'react'
import { useAtom } from 'jotai'
import { Flex, Avatar, Text, Center, Stack } from '@chakra-ui/react'
import { FiLogOut, FiUser } from 'react-icons/fi'
import { menuOpeningStateAtom } from '../../atom/MenuAtom'
import ExtendableButton from '../../components/element/ ExtendableButton'

const MenuFooter = () => {
  const [menuOpeningState, setMenuOpeningState] = useAtom(menuOpeningStateAtom)
  const { mainMenuState } = menuOpeningState
  const { isOpen } = mainMenuState
  return (
    <Flex w='100%' flexFlow='column' p={isOpen ? 5 : 0}>
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
    <Flex flexFlow='column' p={4} mb={1} flexGrow={1}>
      <Flex
        overflow='hidden'
        border='2px'
        py={4}
        borderRadius='10px'
        borderColor='gray.200'
        cursor='pointer'
        color='white'
        transition={'1000ms'}
        _hover={{ bg: 'gray.200', color: 'gray.700' }}
        flexFlow='column'
        alignItems='center'
      >
        <Avatar src='' name='Chris Kasahara' size='md' m={1} />
        <Text fontSize='lg' fontWeight='bold' overflow='hidden' w='150px'>
          Chris D Kasahara
        </Text>
      </Flex>
      <Flex>
        <Stack direction='row' spacing={2} py={1}>
          <ExtendableButton
            buttonText='LOGOUT'
            isExtend={isLeftButtonWide}
            extendWidth='250px'
            shrinkWidth='70px'
            height={12}
            icon={FiLogOut}
            onMouseEvent={!isLeftButtonWide ? onMouseEvent : () => {}}
          />
          <ExtendableButton
            buttonText='SWITCH ACC'
            isExtend={!isLeftButtonWide}
            extendWidth='250px'
            shrinkWidth='70px'
            height={12}
            icon={FiUser}
            onMouseEvent={isLeftButtonWide ? onMouseEvent : () => {}}
          />
        </Stack>
      </Flex>
    </Flex>
  )
}

const FooterContentsWhenMenuClosed = () => {
  return (
    <>
      <Flex flexFlow='row' cursor='pointer' p={4} alignItems='center'>
        <Avatar src='' name='Chris Kasahara' size='md' />
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
