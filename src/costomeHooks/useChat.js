import { useMutation  } from "@tanstack/react-query";
import { queryBot } from "@/services/chatBotApis";

const  useChat = ()=> {
      return useMutation({
         mutationFn:queryBot
      })
}

export {useChat} ; 