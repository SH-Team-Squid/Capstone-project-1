import React from "react";
import Apps from '../img/apps.svg'
import squid from '../img/squid.svg'

const Header = () => {
    return (
        <header>
            <ul className="side_nav">
                <li><a href="/">About</a></li>
            </ul>
            <ul>
                <div>
                    <li><a href="/">Gmail</a></li>
                    <li><a href="/">Images</a></li>
                </div>
                <li className="user">
                    <img src={Apps} alt="side hustle apps" className="apps" title="apps"/><a href="/"><img src={squid} alt="squid" title="Team Squid" width="50px"/></a>
                </li>
            </ul>
        </header>
    )
}
export default Header;