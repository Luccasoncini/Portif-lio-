import { createContext, ReactNode, useContext, useState, useEffect } from "react"

interface MenuProviderProps {
  children: ReactNode
}

interface MenuContextData {
  isMenuOpened: boolean
  setIsMenuOpened: (id: boolean) => void
}

export const MenuContext = createContext<MenuContextData>({} as MenuContextData)

export function MenuProvider({ children }: MenuProviderProps) {
  const [isMenuOpened, setIsMenuOpened] = useState(false)

  useEffect(() => {
    // ** Get Body Tag
    const element = window.document.body

    // ** Remove classes from Body on mount
    element.classList.remove("overflow")

    // ** If skin is not light add skin class
    if (isMenuOpened === true) {
      element.classList.add("overflow")
    }
  }, [isMenuOpened])

  return <MenuContext.Provider value={{ isMenuOpened, setIsMenuOpened }}>{children}</MenuContext.Provider>
}

export function useMenu() {
  const context = useContext(MenuContext)

  return context
}
