import { useToast } from "@chakra-ui/react"
import { useCallback } from "react"

interface Props {
  title: string;
  status: "info" | "warning" | "success" | "error";
}

export const useMessage = () => {
  const toast = useToast()
  const showMessage = useCallback((props: Props) => {
    const { title, status } = props;
    // Toast({
      
    // })
    toast({
      title,
      status,
      position: "top",
      duration: 3000,
      isClosable: true
    })
  }, [toast])
  return { showMessage }
}