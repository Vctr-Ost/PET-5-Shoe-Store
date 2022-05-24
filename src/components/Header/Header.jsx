import style from './Header.module.scss'
import {Link} from "react-router-dom";

export default function Header(props) {
    return (
        <div className={style.container}>
            <header>
                <Link to='/'>
                    <div className={style.headerLeft}>
                        <img className={style.logo} src='/img/header/logo.svg'/>
                        <div>
                            <h3 className={style.headerTitle}>shoe store</h3>
                            <p className={style.headerSubTitle}>Магазин кращих шузів</p>
                        </div>
                    </div>
                </Link>
                <ul className={style.headerRight}>
                    <li onClick={props.showBusket}>
                        <img className={style.mmr} src='/img/header/basket.svg'/>
                        <span className={style.hSpan}>{props.totalAmount} UAH</span>
                    </li>

                    <Link to='/favor'>
                        <li>
                            <img src='/img/header/favor.svg'/>
                        </li>
                    </Link>
                    <Link to='/profile'>
                        <li>
                            <img src='/img/header/profile.svg'/>
                        </li>
                    </Link>
                </ul>
            </header>
        </div>
    )
}