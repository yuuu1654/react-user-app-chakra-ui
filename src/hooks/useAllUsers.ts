/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useState } from "react"
import { User } from "../types/user";
import axios from "axios";
import { useMessage } from "./useMessage";

/**
 * ユーザー一覧を取得して、表示に必要なデータ？をmapで取り出して、usersステート配列に格納
 * fetchUsers, usersを返却
 */

// interface userProfile {
//   id: number;
//   name: string;
//   email: string;
// }

export const useAllUsers = () => {
  // stateの定義
  const [loading, setLoading] = useState(false);
  // const [userProfiles, setUserProfiles] = useState<Array<userProfile>>([])
  const [users, setUsers] = useState<Array<User>>([])
  const { showMessage } = useMessage()
  const fetchUsers = useCallback(() => {
    setLoading(true)
    axios
      .get<Array<User>>("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res.data)
        setUsers(res.data)
        showMessage({ title: "ユーザー一覧取得完了", status: "success"})
      })
      .catch(() => {
        showMessage({ title: "ユーザー一覧取得できませんでした", status: "error"})
      })
      .finally(() => {
        setLoading(false)
      })
  }, []) // <= useCallbackの依存配列設定 eslint非活性にするでも良い
  return { loading, users, fetchUsers }
}