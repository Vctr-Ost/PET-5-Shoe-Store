import style from './Busket.module.scss'

export default function Busket(props) {
    return (
        <div className={style.overlay}>
            <div className={style.busket}>
                <h3>Корзина</h3>
                <img className={style.closeBusket} src='/img/basket/delete.svg' onClick={props.showBusket}/>
                <div className={style.busketItems}>

                    {props.busketItems.map(item => {
                        return (
                            <div className={style.busketItem}>
                                <div className={style.imgBlock}>
                                    <img src={item.src}/>
                                </div>
                                <div className={style.body}>
                                    <p className={style.busketHeader}>{item.name}</p>
                                    <p className={style.busketPrice}>{item.price} UAH</p>
                                </div>
                                <img onClick={() => props.delFromCart(item.name)} className={style.delButton} src='/img/basket/delete.svg'/>
                            </div>
                        )
                    })}


                    {/*<div className={style.busketItem}>*/}
                    {/*    <div className={style.imgBlock}>*/}
                    {/*        <img src='/img/content/shoes/1.jpg'/>*/}
                    {/*    </div>*/}
                    {/*    <div className={style.body}>*/}
                    {/*        <p className={style.busketHeader}>Чоловічі Кросівки Nike Blazer Mid Suede</p>*/}
                    {/*        <p className={style.busketPrice}>800 UAH</p>*/}
                    {/*    </div>*/}
                    {/*    <button><img src='/img/basket/delete.svg'/></button>*/}
                    {/*</div>*/}
                </div>
                <div className={style.priceBlock}>
                    <span className={style.priceName}>Усього:</span>
                    <span className={style.priceCount}>1600 UAH</span>
                </div>
                <div>
                    <button className={style.btnAccept}>
                        Оформити замовлення
                        <img src='/img/basket/arrow.svg'/>
                    </button>
                </div>
            </div>
        </div>
    )
}