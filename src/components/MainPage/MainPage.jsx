import Card from "./Card/Card";
import style from './MainPage.module.scss';

export default function MainPage(props) {
    let showItems = props.obj.map(item => <Card name={item.name} price={item.price} src={item.src}
                                                addToCart={props.addToCart}/>)

    return (
        <div className={style.container}>
            <div className={style.content}>
                <div className={style.head}>
                    <h1>Всі кросівки</h1>
                    <div className={style.search}>
                        <img src='/img/content/find.svg'/>
                        <input placeholder='Search shoe'/>
                    </div>
                </div>
                <div className={style.store}>
                    {showItems}
                </div>
            </div>
        </div>
    )
}