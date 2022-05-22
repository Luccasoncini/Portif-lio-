import { useMenu } from '../../hooks/useMenu';
import { Menu } from './menu'
import { MenuList } from './menu-list'
import './header.scss'

export function Header() {

    const { isMenuOpened, handleToggleMenu } = useMenu();
     
    return(
        <header className="menu-principal">
            <div className="container">
                <div className='row'>
                    <div className='col-12'>
                        <div className="menu-left">
                            <h4>Lucca Soncini</h4>
                        </div>
                
                        <div className="menu-right">
                            <Menu />
                            <MenuList />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}