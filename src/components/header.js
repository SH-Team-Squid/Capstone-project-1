import React from "react";
import Apps from '../img/apps.svg'
import squid from '../img/squid.svg'

const Header = () => {
    return (
        <header>
            <ul>
                <li><a href="/">About</a></li>
                <li><a href="/">Store</a></li>
            </ul>

            <ul>
                <li><a href="/">Gmail</a></li>
                <li><a href="/">Images</a></li>
                <img src={Apps} alt="side hustle apps" className="apps" title="apps"/>
                <li><a href="/" className="user"><img src={squid} alt="squid" title="Team Squid" width="50px"/></a></li>
            </ul>
        </header>
    )
}
export default Header;