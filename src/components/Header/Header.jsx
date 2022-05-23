import style from './Header.module.scss'

export default function Header(props) {
    return (
        <div className={style.container}>
            <header>
                <div className={style.headerLeft}>
                    <img className={style.logo} src='/img/header/logo.svg'/>
                    <div>
                        <h3 className={style.headerTitle}>shoe store</h3>
                        <p className={style.headerSubTitle}>Магазин кращих шузів</p>
                    </div>
                </div>
                <ul className={style.headerRight}>
                    <li onClick={props.showBusket}>
                        <img className={style.mmr} src='/img/header/basket.svg'/>
                        <span className={style.hSpan}>1205 UAH</span>
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