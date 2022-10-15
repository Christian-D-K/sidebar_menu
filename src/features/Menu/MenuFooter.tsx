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
import { FiLogOut, FiUser, FiChevronRight } from 'react-icons/fi'
import { menuOpeningStateAtom } from '../../atom/MenuAtom'

const MenuFooter = () => {
  const [menuOpeningState, setMenuOpeningState] = useAtom(menuOpeningStateAtom)
  const { mainMenuState } = menuOpeningState
  const { isOpen } = mainMenuState
  return (
    <Flex h={250} w='100%' flexFlow='column' p={5}>
      <Flex
        flexFlow='row'
        border='2px'
        borderRadius='10px'
        borderColor='gray.200'
        py={4}
        pl={7}
        mb={1}
        cursor='pointer'
        _hover={{ bg: 'gray.200' }}
      >
        <Center flexFlow='column' flexGrow={1}>
          <Avatar src='' name='Chris Kasahara' size='md' mr={2} />
          <Text fontSize='lg' fontWeight='bold' color='white'>
            Chris D Kasahara
          </Text>
        </Center>
      </Flex>
      <Flex>
        <Stack direction='row' spacing={2} py={1}>
          <Button size='sm' p={6} rightIcon={<FiLogOut />}>
            SIGN OUT
          </Button>
          <Button size='sm' p={6} rightIcon={<FiUser />}>
            SWITCH ACC
          </Button>
        </Stack>
      </Flex>
    </Flex>
  )
}

const FooterContentsWhenMenuOpen = () => {
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
        _hover={{ bg: 'gray.200' }}
      >
        <Center flexFlow='column' flexGrow={1}>
          <Avatar src='' name='Chris Kasahara' size='md' mr={2} />
          <Text fontSize='lg' fontWeight='bold' color='white'>
            Chris D Kasahara
          </Text>
        </Center>
      </Flex>
      <Flex>
        <Stack direction='row' spacing={2} py={1}>
          <Button size='sm' p={6} rightIcon={<FiLogOut />}>
            SIGN OUT
          </Button>
          <Button size='sm' p={6} rightIcon={<FiUser />}>
            SWITCH ACC
          </Button>
        </Stack>
      </Flex>
    </>
  )
}

export default MenuFooter
