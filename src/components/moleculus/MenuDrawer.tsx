import { Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay } from "@chakra-ui/react";
import { memo } from "react";

interface MenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onClickHome: () => void;
  onClickUserManagement: () => void;
  onClickSetting: () => void;
}

export const MenuDrawer = memo((props: MenuDrawerProps) => {
  const { isOpen, onClose, onClickHome, onClickUserManagement, onClickSetting } = props;
  return (
    <Drawer placement="left" size={"xs"} isOpen={isOpen} onClose={onClose} >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerHeader
              borderBottomWidth={"1px"}
              textAlign={"center"}
              bg={"teal.400"}
            >
              各種ページ
            </DrawerHeader>
            <DrawerBody p={0} bg={"gray.400"}>
              <Button onClick={onClickHome} w={"100%"} bg={"cyan.200"} py={4}>TOP</Button>
              <Button onClick={onClickUserManagement} w={"100%"} bg={"purple.200"} py={4}>ユーザー一覧</Button>
              <Button onClick={onClickSetting} w={"100%"} bg={"green.200"} py={4}>設定</Button>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
  )
})