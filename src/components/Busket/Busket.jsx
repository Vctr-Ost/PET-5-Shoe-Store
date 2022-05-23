import style from './Busket.module.scss'

export default function Busket(props) {
    return (
        <div className={style.overlay}>
            <div className={style.busket}>
                <h3>Корзина</h3>
                <img className={style.closeBusket} src='/img/basket/delete.svg' onClick={props.showBusket}/>
                <div className={style.busketItems}>
                    {props.busketItems.map(item => {
                        // debugger
                        return (
                            <div key={item.name} className={style.busketItem}>
                                <div className={style.imgBlock}>
                                    <img src={item.src}/>
                                </div>
                                <div className={style.body}>
                                    <p className={style.busketHeader}>{item.name}</p>
                                    <p className={style.busketPrice}>{item.price} UAH</p>
                                </div>
                                <img onClick={() => props.delFromCart(item.id)} className={style.delButton}
                                     src='/img/basket/delete.svg'/>
                            </div>
                        )
                    })}
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