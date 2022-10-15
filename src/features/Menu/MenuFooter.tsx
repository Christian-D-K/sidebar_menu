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

const MenuFooter = () => {
  return (
    <Flex bg='blue' h={200} flexFlow='column' p={4}>
      <Flex
        flexFlow='row'
        border='2px'
        borderRadius='10px'
        borderColor='white'
        p={4}
        mb={1}
      >
        <Center>
          <Avatar src='' name='Chris Kasahara' size='md' mr={2} />
          <Text fontSize='lg' fontWeight='bold' color='white'>
            Chris D Kasahara
          </Text>
          <Icon p={1} w={5} color='white' as={FiChevronRight} />
        </Center>
      </Flex>
      <Flex>
        <Stack direction='row' spacing={3} p={1}>
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

export default MenuFooter
