import { Box, Button, Divider, Flex, Heading, Input, Stack } from "@chakra-ui/react";
import { memo } from "react";
import { PrimaryButton } from "../atoms/button/PrimaryButton";

export const Login = memo(() => {
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
          <Input placeholder="ユーザーID" />
          {/* <Button 
            color={"cyan.50"} 
            bg={"teal.400"}
            _hover={{ opacity: 0.8 }}
          >
            ログイン
          </Button> */}
          <PrimaryButton>ログイン</PrimaryButton>
        </Stack>
      </Box>
    </Flex>
  )
})