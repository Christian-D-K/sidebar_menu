import {
  Flex,
  Avatar,
  Text,
  Center,
  Box,
  Stack,
  Button,
} from '@chakra-ui/react'
import { EmailIcon, ArrowForwardIcon } from '@chakra-ui/icons'

const MenuFooter = () => {
  return (
    <Flex bg='blue' h={150} flexFlow='column'>
      <Flex flexFlow='row'>
        <Stack direction='row'>
          <Avatar src='' name='a a' />
        </Stack>
        <Text fontSize='xs'>Chris D Kasahara</Text>
        <Center>
          <Box m={15}>{'>'}</Box>
        </Center>
      </Flex>
      <Flex>
        <Stack direction='row' spacing={4}>
          <Button rightIcon={<ArrowForwardIcon />} colorScheme='teal'>
            Sign Out
          </Button>
        </Stack>
      </Flex>
    </Flex>
  )
}

export default MenuFooter
