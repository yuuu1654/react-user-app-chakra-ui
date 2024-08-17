import { useCallback, useState } from "react";
import { User } from "../types/user";
import axios from "axios";
import { useNavigate } from "react-router-dom";

/**
 * 入力されたユーザーIDをuserIdに保存
 * userIdをキーにしてユーザーを検索
 * ログインの処理が呼び出された時に、loadingをtrueにする
 * ログインの処理が完了したら、loadingをfalseにする
 * 取得するユーザーデータの型定義
 * 
 */
export const useAuth = () => {
  const [loading, setLoading] = useState(false)
  const navigation = useNavigate()
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
          // ホーム画面に遷移
          console.log(result.data)
          navigation("/home")
        } else {
          alert("ユーザーが見つかりません")
        }
      })
      .catch(() => {
        alert("ログインできません")
      })
      .finally(() => {
        setLoading(false)
      })

  }, [])
  return { login, loading }
}