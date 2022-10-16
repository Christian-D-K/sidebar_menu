import { Center, Box, Text, chakra, shouldForwardProp } from '@chakra-ui/react'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <Box h='100vh' w='100%'>
      <Center h='100vh'>
        <Text color='gray.100' fontSize='6xl' fontWeight='bold'>
          HOME
        </Text>
      </Center>
    </Box>
  )
}
export default Home
