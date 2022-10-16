import React from 'react'
import {
  ListIcon,
  Flex,
  ListItem,
  Center,
  Icon,
  List,
  chakra,
  shouldForwardProp,
} from '@chakra-ui/react'
import { useAtom } from 'jotai'
import { menuContentsAtom, menuOpeningStateAtom } from '../../atom/MenuAtom'
import { navItemType } from '../../types/Manu.type'
import { FiChevronDown } from 'react-icons/fi'
import SubMenuNavItem from './SubMenuNavItem'
import Link from 'next/link'

import { motion, isValidMotionProp, useAnimation } from 'framer-motion'

const AnimationBoxForSubMenu = chakra(motion.div, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
})

const NavItem = ({ id }: navItemType) => {
  const [menuContents] = useAtom(menuContentsAtom)
  const [menuOpeningState, setMenuOpeningState] = useAtom(menuOpeningStateAtom)
  const controlAnimation = useAnimation()

  const { mainMenuState, subMenuState } = menuOpeningState
  const isMainMenuOpen = mainMenuState.isOpen

  /* レンダリングするアイテムのIDでメニューコンテンツを検索し、レンダリングアイテムの情報のみ抽象 */
  const navItemContens = menuContents.filter(
    (menuContentsItem) => menuContentsItem.id === id
  )[0]

  const onClick = () => {
    /* Frame Motionのアニメーションスタートメソッドを呼び出す */
    controlAnimation.start(
      subMenuState.openSubMenuNavItemIds.includes(id)
        ? {
            maxHeight: ['50em', '0em'],
          }
        : {
            maxHeight: ['0em', '50em'],
          }
    )

    /* メニューの開閉状態を操作 */
    navItemContens.SubMenuContents &&
      navItemContens.SubMenuContents?.length > 0 &&
      setMenuOpeningState((value) => {
        /* レンダリングアイテムが現在オープンしているかを確認 */
        if (subMenuState.openSubMenuNavItemIds.includes(navItemContens.id)) {
          /* レンダリングアイテムのサブメニューがいている場合 */
          /* 開いている状態を保持する配列から、レンダリングアイテムのIDを削除 */
          subMenuState.openSubMenuNavItemIds =
            subMenuState.openSubMenuNavItemIds.filter(
              (openSubMenuNavItemId) =>
                navItemContens.id !== openSubMenuNavItemId
            )
        } else {
          /* レンダリングアイテムのサブメニューが閉じている場合場合 */
          /* 開いている状態を保持する配列へ レンダリングアイテムのIDを追加 */
          subMenuState.openSubMenuNavItemIds.push(navItemContens.id)
        }
        return {
          ...value,
          subMenuState: subMenuState,
        }
      })
  }

  return (
    <Flex flexFlow='column'>
      <Flex
        flexFlow='row'
        color='gray.200'
        cursor='pointer'
        _hover={{ bg: 'gray.200', color: 'gray.700' }}
      >
        <Link href={navItemContens.path ? navItemContens.path : '/'}>
          <Flex flexGrow={1} flexFlow='row' fontSize='xl'>
            <ListItem
              my='24px'
              h={30}
              fontWeight='bold'
              overflow='hidden'
              flexGrow={1}
            >
              <ListIcon
                mx={6}
                h={7}
                w={7}
                strokeWidth={2}
                as={navItemContens.icon}
              />
              {isMainMenuOpen && navItemContens?.name}
            </ListItem>
          </Flex>
        </Link>
        {navItemContens.SubMenuContents &&
          navItemContens.SubMenuContents?.length > 0 &&
          isMainMenuOpen && (
            <Center
              w='80px'
              onClick={onClick}
              _hover={{ bg: 'gray.600', color: 'gray.200' }}
            >
              <Icon as={FiChevronDown} h={5} w={5} strokeWidth='3px' />
            </Center>
          )}
      </Flex>
      {mainMenuState.isOpen && (
        <AnimationBoxForSubMenu
          animate={controlAnimation}
          // @ts-ignore no problem in operation, although type error appears.
          transition={{
            duration: 0.3,
          }}
          flexFlow='column'
          bg='white'
          bgGradient='linear(230deg, rgba(120, 120, 120, .7), rgba(250,250,250, .6) 50%),'
          overflow='hidden'
          maxHeight='0em'
        >
          <List>
            {navItemContens.SubMenuContents &&
              navItemContens.SubMenuContents.map((SubMenuContentsItem) => (
                <SubMenuNavItem
                  id={SubMenuContentsItem.id}
                  key={SubMenuContentsItem.id}
                  parentId={navItemContens.id}
                />
              ))}
          </List>
        </AnimationBoxForSubMenu>
      )}
    </Flex>
  )
}

export default NavItem
