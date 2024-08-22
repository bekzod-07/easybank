import "./Header.css"
import Logo from "./Logo.svg"

function Header(){
    return(
        <header className="header">
            <div className="container">
                <div className="header__app">
                    <div className="header__app__logo">
                        <img src={Logo} alt="Rasm bor"/>
                    </div>
                    <div className="header__app__list">
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Contact</li>
                            <li>Blog</li>
                            <li>Careers</li>
                        </ul>
                    </div>
                    <div className="header__app__button">
                        <button className='button'>Request Invite</button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;