import { useCallback, useState } from "react";
import { User } from "../types/user";

interface Props {
  id: number
  users: Array<User>
  onOpen: () => void;
}
/**
 * [選択したユーザー情報を特定し、モーダルを表示するカスタムフック]
 * idをもとにusersから一致するユーザーを検索して返却
 * users配列に対して、一つずつidを検証して、最初に合致したら、userオブジェクトをselectedUserに格納してreturnして処理を止める
 */
export const useSelectUsers = () => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null)
  
  const findUser = useCallback((props: Props) => {
    const { id, users, onOpen } = props;
    const targetUser = users.find((user) => user.id === id)
    // ▼ 今回、findが値を返さない事はないので、undefinedの可能性を明示的に排除する (あまり使わない方がいい)
    // setSelectedUser(targetUser ?? null) <= targetUserがundefinedならnullを入れて型エラーを回避
    setSelectedUser(targetUser!)
    onOpen()
  }, [])
  return { findUser, selectedUser }
}
/**
 * [エラーメモ]
 * selectedUserが更新されないので、モーダルを閉じたタイミングとかでsetUserを初期化する必要がありそう？
 * 
 */