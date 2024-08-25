/* eslint-disable react-hooks/exhaustive-deps */
import { Center, Spinner, useDisclosure, Wrap, WrapItem } from "@chakra-ui/react";
import { FC, memo, useCallback, useEffect } from "react";
import { useAllUsers } from "../../hooks/useAllUsers";
import { UserCard } from "../organisms/user/UserCard";
import { UserDetailModal } from "../organisms/user/UserDetailModal";
import { useSelectUsers } from "../../hooks/useSelectUsers";
import { useLoginUser } from "../../hooks/useLoginUser";
/**
 * 画面ロード時にユーザー一覧を取得する処理を走らせる
 *  -> useEffect apiを使用する？
 * ユーザーデータ取得中はloading
 */
export const UserManagement: FC = memo(() => {
  const { loading, users, fetchUsers } = useAllUsers();
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { findUser, selectedUser } = useSelectUsers();
  const { loginUser } = useLoginUser();
  console.log("UserManagement側のselectedUser", selectedUser)
  console.log("ログインユーザー", loginUser)

  /**
   * ▼ propsとして渡す関数は、毎回再作成するとレンダリング効率が悪いので、useCallbackを使用
   * useCallbackを使う罠 : 依存配列にusersを指定しないと、初期値の空のusersが参照されてしまい、モーダルにデータが入らない
   */
  const onClickShowUserModal = useCallback((id: number) => {
    findUser({id, users, onOpen})
    console.log(selectedUser)
  }, [users, findUser, onOpen]);
  
  // 画面ロード時にユーザーデータを取得
  useEffect(() => fetchUsers(), [])

  return (
    <>
      {loading ? (
        <Center h={"100vh"}>
          <Spinner />
        </Center>
      ) : (
        <Wrap bg={"cyan.100"} p={{ base: 4, md: 10 }}>
          {/* ▼ レイアウトテスト */}
          {/* {[...Array(10)].map(() => (
            <WrapItem>
              <div style={{ width: "300px", height: "300px", backgroundColor: "blue"}} />
            </WrapItem>
          ))} */}
          
          {users.map((user) => (
            <WrapItem key={user.id} mx={"auto"}>
              <UserCard 
                id={user.id}
                imagePath="https://picsum.photos/150"
                userName={user.name}
                nickName={user.username}
                // ▼ 具体的な処理をUserCardに書かないようにする
                // onOpen={onOpen} <= NG
                onClick={onClickShowUserModal}
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
      <UserDetailModal 
        isOpen={isOpen} 
        onClose={onClose} 
        user={selectedUser}
      />
    </>
    
  )
})