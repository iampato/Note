import React from "react";
import '../styles/Footer.css';

function Footer() {
    return (
        <div>
            <footer className="footer">
                <div className="footer-copyright">© 2021 Copyright</div>
                Developed by
                <a href="https://blog.iampato.me" className="footer-title">
                    Patrick Waweru
                </a>
                with ❤️
            </footer>
        </div>
    );
}

export default Footer;