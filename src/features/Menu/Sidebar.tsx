import { Flex } from "@chakra-ui/react"
import MenuFooter from "./MenuFooter"
import MenuHeader from "./MenuHeader"
import { menuContents } from "../../common/consts"
import NavItem from "./NavItem"

const Sidebar = () => {
  console.log(menuContents)
  return (
    <Flex flexFlow="column" w="240px" bg="red" h="100vh">
      <MenuHeader />
      <Flex flexGrow={1} flexFlow='column'>
        {menuContents.map(menuItem => <NavItem id={menuItem.id} key={menuItem.id}/>)}
      </Flex>
      <MenuFooter />
    </Flex>
  )
}

export default Sidebar
