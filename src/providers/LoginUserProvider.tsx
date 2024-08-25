import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";
import { User } from "../types/user";

type LoginUser = User & { isAdmin: boolean };

export interface LoginUserContextType {
  loginUser: LoginUser | null; // ログインしてたらUser型、ログインしてなかったらnull型
  setLoginUser: Dispatch<SetStateAction<LoginUser | null>>;
}

export const LoginUserContext = createContext<LoginUserContextType>(
  {} as LoginUserContextType
);

// ログインユーザー情報を保持するcontext
export const LoginUserProvider = (props: { children: ReactNode }) => {
  const { children } = props;
  const [loginUser, setLoginUser] = useState<LoginUser | null>(null);
  
  return (
    // loginUserの更新時に、setLoginUserを使っているコンポーネントを再レンダリングしたくない時は、valueに渡す値を分ける為にcontextを分けるテクニックも存在する
    <LoginUserContext.Provider value={{ loginUser, setLoginUser }}>
      {children}
    </LoginUserContext.Provider>
  )
}