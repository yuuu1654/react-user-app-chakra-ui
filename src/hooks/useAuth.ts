import { useCallback, useState } from "react";
import { User } from "../types/user";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useMessage } from "./useMessage";
import { useLoginUser } from "./useLoginUser";

/**
 * 入力されたユーザーIDをuserIdに保存
 * userIdをキーにしてユーザーを検索
 * ログインの処理が呼び出された時に、loadingをtrueにする
 * ログインの処理が完了したら、loadingをfalseにする
 * 取得するユーザーデータの型定義
 */
export const useAuth = () => {
  const [loading, setLoading] = useState(false)
  const { setLoginUser } = useLoginUser();
  const navigation = useNavigate()
  const { showMessage } = useMessage();
  const login = useCallback((id: string) => {  
    setLoading(true)
    axios
      .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((result) => {
        // ▼ バリデーション
        if (id === "") {
          return
        }
        if (result.data) {
          // ログイン情報をloginUserに保存
          const isAdmin = result.data.id === 10 ? true : false;
          setLoginUser({ ...result.data, isAdmin}) // 新しくオブジェクトを再定義する様なイメージ
          showMessage({ title: "ログイン成功しました！", status: "success" })
          navigation("/home")
        } else {
          showMessage({ title: "ユーザーが見つかりません", status: "error" })
        }
      })
      .catch(() => {
        showMessage({ title: "ログインできません", status: "error" })
      })
      .finally(() => {
        setLoading(false)
      })

  }, [navigation, showMessage, setLoginUser])
  return { login, loading }
}