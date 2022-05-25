import style from '../MainPage/MainPage.module.scss';
import s from './Favor.module.scss';
import Card from "../MainPage/Card/Card";
import {Link} from "react-router-dom";

export default function Favor(props) {

    let showItems = props.obj.filter(i => i.isFav).map(item =>
        <Card key={item.id} item={item} changeItemInBusket={props.changeItemInBusket}
              changeFav={props.changeFav}/>
    )

    return (
        <div className={style.container}>
            <div className={style.content}>
                <div className={style.head}>
                    <h1>Мої закладки</h1>
                </div>
                <div className={style.store}>
                    {showItems.length === 0
                        ? <div className={s.fav}>
                            <img className={s.favImg} src='/img/favor/emojiFavor.jpg'/>
                            <h2 className={s.favHead}>Закладок ще немає :(</h2>
                            <Link to='/'>
                                <button className={s.clearBtn} onClick={props.showBusket}>
                                    <span className={s.clearBtnSpan}>Повернутися назад</span>
                                    <img className={s.clearBtnImg} src='/img/basket/arrow.svg'/>
                                </button>
                            </Link>
                        </div>
                        : showItems
                    }
                </div>
            </div>
        </div>
    )
}