import * as SC from './styles';

export function Sidebar() {
    return (
        <SC.SidebarComponent>
            <a className="primary" href="/">Ínicio</a>
            <a href="##">Sobre</a>
            <a href="###">Portfólio</a>
            <a href="####">Contato</a>
        </SC.SidebarComponent>
    );
}