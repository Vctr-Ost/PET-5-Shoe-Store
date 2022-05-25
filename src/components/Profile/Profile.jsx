import style from '../MainPage/MainPage.module.scss';
import s from './Profile.module.scss';
import Card from "../MainPage/Card/Card";
import {Link} from "react-router-dom";

export default function Profile(props) {
    // let showItems = props.obj.filter(i => i.name.toLowerCase().includes(props.searchValue.toLowerCase())).map(item =>
    //     <Card key={item.id} item={item} addToCart={props.addToCart} changeItemInBusket={props.changeItemInBusket}/>
    // )

    return (
        <div className={style.container}>
            <div className={style.content}>
                <div className={style.head}>
                    <h1>Мої покупки</h1>
                </div>
                <div className={style.store}>
                    <div className={s.fav}>
                        <img className={s.favImg} src='/img/favor/emojiFavor.jpg'/>
                        <h2 className={s.favHead}>Наразі ця сторінка не працює :(</h2>
                        <Link to='/'>
                            <button className={s.clearBtn} onClick={props.showBusket}>
                                <span className={s.clearBtnSpan}>Повернутися назад</span>
                                <img className={s.clearBtnImg} src='/img/basket/arrow.svg'/>
                            </button>
                        </Link>
                    </div>
                    {/*{showItems}*/}
                </div>
            </div>
        </div>
    )
}