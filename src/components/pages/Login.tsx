import { Box, Divider, Flex, Heading, Input, Stack } from "@chakra-ui/react";
import { ChangeEvent, memo, useEffect, useState } from "react";
import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { useAuth } from "../../hooks/useAuth";

export const Login = memo(() => {
  /**
   * 初期値に("")空文字を入れてあげると、型推論が働いてuserIdは、string型であると判断される
   */
  const [userId, setUserId] = useState("")
  
  const onChangeUserId = (e: ChangeEvent<HTMLInputElement>) => {
    setUserId(e.target.value)
    console.log(userId)
  }

  useEffect(() => {
    console.log("userId", userId)
  })

  const { login, loading } = useAuth();
  const onClickLogin = () => login(userId)
  return (
    <Flex 
      bg={"green.100"}
      justify={"center"}
      align={"center"}
      height={"100vh"}
    >
      <Box 
        bg={"blue.100"}
        w={"lg"}
        p={6}
        borderRadius={"md"}
        shadow={"2xl"}
      >
        <Heading as={"h1"}>ユーザー管理アプリ</Heading>
        <Divider my={4} />
        <Stack spacing={8} px={8}>
          {/* onChangeで変更を検知して、値をstateのsetterメソッドで保存 */}
          <Input placeholder="ユーザーID" value={userId} onChange={onChangeUserId}/>
          <PrimaryButton 
            /**
             * userIdが空ならボタンを押せないようにする
             * loading中はChakraUIのグルグルを出す
             */
            onClick={onClickLogin} 
            disabled={userId === ""}
            loading={loading}
          >
            ログイン
          </PrimaryButton>
        </Stack>
      </Box>
    </Flex>
  )
})