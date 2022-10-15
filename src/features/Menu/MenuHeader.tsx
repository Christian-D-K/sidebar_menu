import { Text, Center, Flex, Icon } from '@chakra-ui/react'
import { FiSidebar } from 'react-icons/fi'

const MenuHeader = () => {
  return (
    <Flex h='60px' pos='relative'>
      <Flex flexGrow={1}>
        <Text
          ml={5}
          my={2}
          py={1}
          fontSize='2xl'
          fontWeight='bold'
          color='gray.200'
        >
          Dinosaur
        </Text>
      </Flex>
      <Flex
        w='50px'
        h='50px'
        pos='absolute'
        bg='gray.100'
        borderLeftRadius={35}
        right={0}
        textAlign='center'
      >
        <Center>
          <Icon w='50px' h='25px' strokeWidth='2px' as={FiSidebar} />
        </Center>
      </Flex>
    </Flex>
  )
}

export default MenuHeader
