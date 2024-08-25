import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack } from "@chakra-ui/react";
import { ChangeEvent, memo, useEffect, useState } from "react";
import { User } from "../../../types/user";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  user: User | null;
  // loginUser: LoginUser | null;
  isAdmin?: boolean;
}
/**
 * 管理者 (idが10) でログインしていたら、編集ボタンを追加、isReacOnlyをなくして編集出来るようにする
 * ->ユーザー管理画面からisAdmin (loginUser?.isAdmin)フラグをpropsとして渡す
 *  ->そうすると、モーダル側でログインユーザーを定義しなくてもいいので、コードがシンプルになる
 * フォーム内の値を変更する場合は、ステートをvalueに設定し、onChangeで値を変更するセットの修正が必要
 */
export const UserDetailModal = memo((props: Props) => {
  const { isOpen, onClose, user, isAdmin = false } = props


  const [name, setName] = useState("")
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")

  //初期値の設定
  useEffect(() => {
    setName(user?.name ?? "")
    setUsername(user?.username ?? "")
    setEmail(user?.email ?? "")
    setPhone(user?.phone ?? "")
  }, [user])

  const onChangeName = (e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)
  const onChangeUsername = (e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)
  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)
  const onChangePhone = (e: ChangeEvent<HTMLInputElement>) => setPhone(e.target.value)

  const onClickUpdate = () => alert("ユーザー情報の更新")

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
                <Input value={name} onChange={onChangeName} isReadOnly={!isAdmin} />
              </FormControl>
              <FormControl>
                <FormLabel>ニックネーム</FormLabel>
                <Input value={username} onChange={onChangeUsername} isReadOnly={!isAdmin} />
              </FormControl>
              <FormControl>
                <FormLabel>メールアドレス</FormLabel>
                <Input value={email} onChange={onChangeEmail} isReadOnly={!isAdmin} />
              </FormControl>
              <FormControl>
                <FormLabel>電話番号</FormLabel>
                <Input value={phone} onChange={onChangePhone} isReadOnly={!isAdmin} />
              </FormControl>
            </Stack>
          </ModalBody>
          <ModalFooter>
            {isAdmin ? (
              <Button colorScheme="red" mr={3} onClick={onClickUpdate}>編集</Button>
            ) : (
              <></>
            )}
            <Button colorScheme="blue" mr={3} onClick={onClose}>閉じる</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
  )
})