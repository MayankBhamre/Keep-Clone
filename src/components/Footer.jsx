import React from "react"

function Footer(){
    const date = new Date();
    const year = date.getFullYear();

    return (
        <footer>
            <p>Copyright {year}</p>
            <p>Made with ❤️ by Mayank.</p>
        </footer>
    );
};

export default Footer;