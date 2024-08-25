import { LoginUserContext, LoginUserContextType } from "../providers/LoginUserProvider"
import { useContext } from "react"

/**
 * ログインしたユーザーを参照するためのコンテキスト
 */
export const useLoginUser = (): LoginUserContextType => useContext(LoginUserContext)