import { useMenu } from '../../hooks/useMenu';
import { MenuNavigation } from '../menu'
import './header.scss'

export function Header() {

    const { handleToggleMenu } = useMenu();
     
    return(
        <header className="menu-principal">
            <div className="menu-left">
                <h4>Lucca Soncini</h4>
            </div>
           
            <div className="menu-right">
                <div className="open-menu" onClick={handleToggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>    
                <MenuNavigation />
            </div>
        </header>
    )
}