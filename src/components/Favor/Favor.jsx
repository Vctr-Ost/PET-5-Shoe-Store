import style from '../MainPage/MainPage.module.scss';
import Card from "../MainPage/Card/Card";

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
                        ? <div>

                        </div>
                        : showItems
                    }
                </div>
            </div>
        </div>
    )
}