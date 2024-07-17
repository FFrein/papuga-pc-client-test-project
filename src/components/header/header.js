import './header.css';
import logo from "../../resource/logo.png"
import { NavLink } from 'react-router-dom';
import {LOGIN_ROUTE, PCCONFIGS_ROUTE, ADMIN_PANEL_ROUTE, CHAT_ROUTE, COMPARE_ROUTE, STORE_ROUTE} from '../../utils/consts'
import {observer} from 'mobx-react-lite'
import { Context } from '../..';
import { useContext } from 'react';

function Header(){

    const { store } = useContext(Context);

    return(
        <div>
            <header className="Header">
                <img src={logo} className="H-Logo" alt="logo"/>
                <h3 className="LogoName">Papuga PC</h3>
                <div className="Navigation">
                    
                    {!store.isAuth ? (<NavLink className="NavLink" to={LOGIN_ROUTE}>Login</NavLink>) : null}

                    {store.isAuth && !store.user.banned  ? (
                        <>
                            <NavLink className="NavLink" to={LOGIN_ROUTE}>Profile</NavLink>
                            <NavLink className="NavLink" to={PCCONFIGS_ROUTE}>Configuration</NavLink>
                            <NavLink className="NavLink" to={COMPARE_ROUTE}>Compare</NavLink>
                            <NavLink className="NavLink" to={STORE_ROUTE}>Store</NavLink>
                            <NavLink className="NavLink" to={CHAT_ROUTE}>HELP | CHAT</NavLink>
                        </>
                    ) : null}

                    {(store.isAuth && store.user.role == "admin") ? 
                    <NavLink className="NavLink"  to={ADMIN_PANEL_ROUTE}>Admin Panel</NavLink>
                    : 
                    null}
                </div>
            </header>
        </div>
    )
}

export default observer(Header);