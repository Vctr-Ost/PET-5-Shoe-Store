import Card from "./Card/Card";
import style from './MainPage.module.scss';

export default function MainPage(props) {
    let showItems = props.obj.filter(item => item.name.toLowerCase().includes(props.searchValue.toLowerCase())).map(item =>
        <Card key={item.src} name={item.name}
              price={item.price} src={item.src} addToCart={props.addToCart}/>)

    return (
        <div className={style.container}>
            <div className={style.content}>
                <div className={style.head}>
                    <h1>Всі кросівки</h1>
                    <div className={style.search}>
                        <img src='/img/content/find.svg'/>
                        <input onInput={props.onSearchInput} value={props.searchValue} placeholder='Шукати ...'/>
                        {props.searchValue &&
                            <img onClick={() => props.setSearchValue('')} className={style.clearSearch}
                                 src='/img/basket/delete.svg'/>}
                    </div>
                </div>
                <div className={style.store}>
                    {showItems}
                </div>
            </div>
        </div>
    )
}