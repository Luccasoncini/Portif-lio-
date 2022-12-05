import { createContext, ReactNode, useContext, useState } from "react"

interface BlurProviderProps {
  children: ReactNode
}

interface BlurContextData {
  isBlur: boolean
  setIsBlur: (id: boolean) => void
  type: string
  setType: (id: string) => void
}

export const BlurContext = createContext<BlurContextData>({} as BlurContextData)

export function BlurProvider({ children }: BlurProviderProps) {
  const [isBlur, setIsBlur] = useState(false)
  const [type, setType] = useState("")

  return <BlurContext.Provider value={{ isBlur, setIsBlur, type, setType }}>{children}</BlurContext.Provider>
}

export function useBlur() {
  const context = useContext(BlurContext)
  return context
}
