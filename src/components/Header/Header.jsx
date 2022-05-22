export default function Header() {
    return (
        <div className='container'>
            <header>
                <div className='headerLeft'>
                    <img className='logo' src='/img/header/logo.svg'/>
                    <div>
                        <h3 className='headerTitle'>shoe store</h3>
                        <p className='headerSubTitle'>Магазин кращих шузів</p>
                    </div>
                </div>
                <ul className='headerRight'>
                    <li>
                        <img className='mmr' src='/img/header/basket.svg'/>
                        <span className='hSpan'>1205 UAH</span>
                    </li>
                    <li>
                        <img src='/img/header/favor.svg'/>
                    </li>
                    <li>
                        <img src='/img/header/profile.svg'/>
                    </li>
                </ul>
            </header>
        </div>
    )
}