import { useMenu } from "../../../hooks/useMenu";
import "./menu.scss"

export function Menu() {
    const { isMenuOpened, handleToggleMenu } = useMenu();

    return(
        <div className={ isMenuOpened ? 'open-menu opened' : 'open-menu'} onClick={handleToggleMenu}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
} 