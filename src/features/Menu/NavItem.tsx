import { Flex, Text } from "@chakra-ui/react"
import { useAtom } from 'jotai'
import { menuContentsAtom } from '../../atom/MenuAtom'

const NavItem = ({
  id
}: string) => {
  const [menuContents] = useAtom(menuContentsAtom)
  const navItemContens = menuContents.filter(menuContentsItem => menuContentsItem.id === id)[0]
  return (
    <Flex bg="yellow" h={40} _hover={{bg: 'gray'}}>
      <Text>{navItemContens?.name}</Text>
    </Flex>
  )
}

export default NavItem
