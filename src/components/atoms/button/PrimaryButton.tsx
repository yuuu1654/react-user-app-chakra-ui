import { Button } from "@chakra-ui/react";
import { memo, ReactNode } from "react"

interface PrimaryButtonProps {
  /**
   * 渡されるpropsの値や関数のラベル側 (左) の型を指定する
   * disabled, loadingはオプションなので、propsで値が渡されない時は常にfalseにしておく
   */
  children: ReactNode;
  onClick: () => void;
  disabled?: boolean;
  loading?: boolean;
}

export const PrimaryButton = memo((props: PrimaryButtonProps) => {
  const { children, onClick, disabled = true, loading = false } = props;
  return (
    <Button 
      color={"cyan.50"} 
      bg={"teal.400"}
      _hover={{ opacity: 0.8 }}
      onClick={onClick}
      // ▼ disabled だと、ボタンが非活性にならない...
      isDisabled={disabled || loading} // 念の為loading中も押せないようにする
      isLoading={loading}
    >
      {children}
    </Button>
  )
})