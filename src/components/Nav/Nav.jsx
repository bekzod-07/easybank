import "./Nav.css"
import Phone from "./hero-phones-desktop.png"

function Nav(){
    return(
        <nav className="nav">
            <div className='container'>
                <div className="nav__app">
                    <div className="nav__app__text">
                        <h2>Next generation digital banking</h2>
                        <p>Take your financial life online. Your Easybank account will be a
                            one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
                        <button className='button'>Request Invite</button>
                    </div>
                    <div className="nav__app__img">
                        <img src={Phone} alt=""/>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav;