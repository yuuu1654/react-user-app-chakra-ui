import { Flex, Heading } from "@chakra-ui/react";
import { FC, memo } from "react";

export const Header: FC = memo(() => {
  return (
    // Flexboxみたいなもの 要素を横並びにできる
    <Flex as="nav" bg={"cyan.400"} align="center" justify={"space-around"} padding={{ base: 2, md: 6 }}>
      
      <Heading as="h1" fontSize={{ base: "md", md: "3xl" }}>ユーザー管理アプリ</Heading>
    </Flex>
  )
})