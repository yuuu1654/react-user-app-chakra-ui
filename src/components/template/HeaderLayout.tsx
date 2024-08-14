import { FC, memo, ReactNode } from "react";
import { Header } from "../organisms/layout/Header";

/**
 * ログイン画面にはヘッダーを出さずに、ログインした後にヘッダーを出したい
 * ▲ を制御する役割の画面
 */

interface Props {
  children: ReactNode;
}
export const HeaderLayout: FC<Props> = memo((props) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
    </>
  )
})