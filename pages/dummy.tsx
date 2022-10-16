import { Box, Center, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'

const Dummy: NextPage = () => {
  return (
    <Box h='100vh' w='100%'>
      <Center h='100vh'>
        <Text color='gray.100' fontSize='6xl' fontWeight='bold'>
          Dummy Page
        </Text>
      </Center>
    </Box>
  )
}

export default Dummy
