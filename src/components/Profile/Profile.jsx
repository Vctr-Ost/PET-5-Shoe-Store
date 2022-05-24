import style from '../MainPage/MainPage.module.scss';
import Card from "../MainPage/Card/Card";

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
                    {/*{showItems}*/}
                </div>
            </div>
        </div>
    )
}