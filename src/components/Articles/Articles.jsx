import "./Articles.css"
import Money from "./money.svg"
import Fast from "./fast.svg"
import Simple from "./Simple.png"
import Open from "./Open.svg"

function Articles(){
    return(
        <div className='articles'>
            <div className='container'>
                <div className="articles__text">
                    <h2>Why choose Easybank?</h2>
                    <p>We leverage Open Banking to turn your bank account into your financial hub. Control your finances
                        like never before.</p>
                </div>

                <div className="articles__app">
                    <div className="articles__app__column">
                        <img src={Money} alt=""/>
                        <h3>Online Banking</h3>
                        <p>Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.</p>
                    </div>

                    <div className="articles__app__column">
                        <img src={Simple} alt=""/>
                        <h3>Simple Budgeting</h3>
                        <p>See exactly where your money goes each month. Receive notifications when you’re close to
                            hitting your limits.</p>
                    </div>

                    <div className="articles__app__column">
                        <img src={Fast} alt=""/>
                        <h3>Fast Onboarding</h3>
                        <p>We don’t do branches. Open your account in minutes online and start taking control of your
                            finances right away.</p>
                    </div>

                    <div className="articles__app__column">
                        <img src={Open} alt=""/>
                        <h3>Open API</h3>
                        <p>Manage your savings, investments, pension, and much more from one account. Tracking your
                            money has never been easier.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Articles;