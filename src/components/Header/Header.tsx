
import React, { FC } from 'react'
import s from "./Header.module.css"
import logoImg from "./pics/NizamiLogo.png"
import { ClientSvg } from './ClientSvg/ClientSvg';

const Header: FC = () => {
    return (
        <header className={s.headerWrapper}>
            <div className={s.headerElementsWrapper}>
                <img src={logoImg}></img>

                <button className={s.headerClientButton}><ClientSvg /></button>
            </div>
        </header>
    )
};

export { Header };