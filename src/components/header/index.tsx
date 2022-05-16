import './header.scss'

export function Header() {
    return(
        <header>
            <div>
                <h4>
                    Lucca Soncini
                </h4>
            </div>
            <div>
                <nav>
                    <ul>
                        <li><a href=">Home"></a></li>
                        <li><a href="Sobre Mim"></a></li>
                        <li><a href="Habilidades"></a></li>
                        <li><a href="Trabalhos"></a></li>
                        <li><a href="Contatos"></a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}