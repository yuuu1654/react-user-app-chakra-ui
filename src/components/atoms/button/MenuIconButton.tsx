
import { memo } from "react";
import { IconButton } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";


interface MenuIconButtonProps {
  // 何の型を指定する？ -> propsでコンポーネント呼び出し側から渡す値や関数の型
  onOpen: () => void;
}

export const MenuIconButton = memo((props: MenuIconButtonProps) => {
  const { onOpen } = props
  return (
    <IconButton
      aria-label="メニューボタン" 
      icon={<HamburgerIcon />} 
      size={"sm"}
      variant={"unstyled"} // 背景色が消える
      display={{ base: "block", md: "none" }}
      onClick={onOpen}
    />
  )
})