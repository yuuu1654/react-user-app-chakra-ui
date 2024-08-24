import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack } from "@chakra-ui/react";
import { memo } from "react";
import { User } from "../../../types/user";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  user: User | null;
}

export const UserDetailModal = memo((props: Props) => {
  const { isOpen, onClose, user } = props
  return (
    <Modal isOpen={isOpen} onClose={onClose} motionPreset="slideInBottom">
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalHeader>ユーザー詳細プロフィール</ModalHeader>
          <ModalBody mx={4}>
            <Stack bg={"green.50"} spacing={4}>
              <FormControl>
                <FormLabel>名前</FormLabel>
                <Input value={user?.name} isReadOnly />
              </FormControl>
              <FormControl>
                <FormLabel>ニックネーム</FormLabel>
                <Input value={user?.username} isReadOnly />
              </FormControl>
              <FormControl>
                <FormLabel>メールアドレス</FormLabel>
                <Input value={user?.email} isReadOnly />
              </FormControl>
              <FormControl>
                <FormLabel>電話番号</FormLabel>
                <Input value={user?.phone} isReadOnly />
              </FormControl>
            </Stack>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>閉じる</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
  )
})