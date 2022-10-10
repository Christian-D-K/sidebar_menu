import { Text, Center, Flex } from '@chakra-ui/react'

const MenuHeader = () => {
  return (
    <Flex h={50} pos='relative'>
      <Flex flexGrow={1} bg='green'>
        <Text ml={5} my={3}>
          Header
        </Text>
      </Flex>
      <Flex
        w={35}
        h={40}
        pos='absolute'
        bg='gray'
        borderLeftRadius={35}
        right={0}
        textAlign='center'
      >
        <Center>
          <Text w={35}>X</Text>
        </Center>
      </Flex>
    </Flex>
  )
}

export default MenuHeader
