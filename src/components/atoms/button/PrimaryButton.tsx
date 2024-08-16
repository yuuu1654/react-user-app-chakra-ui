import { Button } from "@chakra-ui/react";
import { memo, ReactNode } from "react"

interface PrimaryButtonProps {
  children: ReactNode;
}

export const PrimaryButton = memo((props: PrimaryButtonProps) => {
  const { children } = props;
  return (
    <Button 
      color={"cyan.50"} 
      bg={"teal.400"}
      _hover={{ opacity: 0.8 }}
    >
      {children}
    </Button>
  )
})