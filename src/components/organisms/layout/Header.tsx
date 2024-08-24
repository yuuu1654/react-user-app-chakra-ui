/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Flex, Heading, Link, useDisclosure } from "@chakra-ui/react";
import { FC, memo } from "react";
import { MenuIconButton } from "../../atoms/button/MenuIconButton";
import { MenuDrawer } from "../../moleculus/MenuDrawer";
import { useNavigate } from "react-router-dom";

export const Header: FC = memo(() => {
  /**
   * レスポンシブのベースはスマホサイズを指定する
   * Flex : Flexboxみたいなもの 要素を横並びにできる
   * react-route v6 から、useHistoryではなく、useNavigateが推奨になった
   * 1行目を設定することで、useCallbackの依存配列に値を指定しなくてもエラーにならない (navigationの値が変わることはないので)
   * 
   */
  const { isOpen, onOpen, onClose } = useDisclosure();
  // react-routerの画面遷移を使っていきたい
  const navigation = useNavigate()
  // const onClickHome = useCallback(() => navigation("/home"), [])
  const onClickHome = () => navigation("/home")
  const onClickUserManagement = () => navigation("/home/user-mng")
  const onClickSetting = () => navigation("/home/setting")
  return (
    <>
      <Flex 
        as="nav" 
        bg={"cyan.400"} 
        align="center" 
        justify={"space-around"} 
        padding={{ base: 2, md: 6 }}
      >
        <Flex 
          align={"center"} 
          as={"a"} 
          _hover={{ cursor: "pointer" }}
          bg={"red.500"}
          onClick={onClickHome}
        >
          <Heading 
            as="h1" 
            fontSize={{ base: "md", md: "3xl" }}
          >
            ユーザー管理アプリ
          </Heading>
        </Flex>
        
        <Flex bg={"green.100"} display={{ base: "none" , md: "flex" }}>
          <Box pr={4}>
            <Link onClick={onClickUserManagement}>ユーザー一覧</Link>
          </Box>
          <Link onClick={onClickSetting}>設定</Link>
        </Flex>
        <MenuIconButton onOpen={onOpen} />
      </Flex>
      <MenuDrawer 
        isOpen={isOpen} 
        onClose={onClose} 
        onClickHome={onClickHome}
        onClickUserManagement={onClickUserManagement}
        onClickSetting={onClickSetting}
      />
    </>
  )
})