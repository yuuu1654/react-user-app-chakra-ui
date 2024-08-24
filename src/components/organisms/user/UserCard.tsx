import { Box, Image, Stack, Text } from "@chakra-ui/react";
import { memo } from "react";

interface Props {
  // 受け取るpropsを設定
  id: number;
  imagePath: string;
  userName: string;
  nickName: string;
  onClick: (id: number) => void;
}

export const UserCard = memo((props: Props) => {
  const { id, imagePath, userName, nickName, onClick } = props;
  return (
    <Box 
      w={"300px"} 
      h={"300px"} 
      bg={"white"}
      borderRadius={"10px"}
      shadow={"lg"}
      p={4}
      _hover={{ cursor: "pointer", opacity: 0.8 }}
      onClick={() => onClick(id)}
    >
      <Stack
        bg={"purple.200"}
      >
        {/* <Image src="https://source.unsplash.com/random" /> <= 表示されない... */}
        <Image
          src={imagePath} 
          borderRadius={"full"} 
          boxSize={"160px"} 
          alt={userName}
          m={"auto"}
        />
        <Text fontSize={"lg"} fontWeight={"bold"}>{userName}</Text>
        <Text fontSize={"sm"} color="gray">{nickName}</Text>
      </Stack>
    </Box>
  )
})