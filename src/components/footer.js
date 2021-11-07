import React from 'react'

const Footer = () => {
    return  (
        <footer>
            <p>Carbon neutral since 2007</p>
            <div className="lists">
                <ul>
                    <li className="about">About</li>
                    <li>Advertising</li>
                    <li>Business</li>
                    <li className="how">How Search Works</li>
                </ul>
                <ul className="settings">
                    <li>Privacy</li>
                    <li>Terms</li>
                    <li>Settings</li>
                </ul>
            </div>
        </footer>
    )
}
export default Footer;