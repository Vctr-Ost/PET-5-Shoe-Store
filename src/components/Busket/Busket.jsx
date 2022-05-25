import style from './Busket.module.scss'

export default function Busket(props) {

    let filterFunc = props.obj.filter(i => i.isInBusket)
    console.log(filterFunc)

    return (
        <div className={style.overlay}>
            <div className={style.busket}>
                <h3>Корзина</h3>
                <img className={style.closeBusket} src='/img/basket/delete.svg' onClick={props.showBusket}/>
                <div className={style.busketItems}>
                    {filterFunc.length === 0
                        ? <div className={style.clearBusket}>
                            <img className={style.clearImg} src='/img/basket/clearBisket.jpg'/>
                            <p className={style.clearP}>Корзина порожня</p>
                            <button className={style.clearBtn} onClick={props.showBusket}>
                                <span className={style.clearBtnSpan}>Повернутися назад</span>
                                <img className={style.clearBtnImg} src='/img/basket/arrow.svg'/>
                            </button>
                        </div>
                        : filterFunc.map(item => {
                            return (
                                <div key={item.name} className={style.busketItem}>
                                    <div className={style.imgBlock}>
                                        <img src={item.src}/>
                                    </div>
                                    <div className={style.body}>
                                        <p className={style.busketHeader}>{item.name}</p>
                                        <p className={style.busketPrice}>{item.price} UAH</p>
                                    </div>
                                    <img onClick={() => props.changeItemInBusket(item)} className={style.delButton}
                                         src='/img/basket/delete.svg'/>
                                </div>
                            )
                        })}
                </div>
                {filterFunc.length === 0 ? null :
                    <>
                        <div className={style.priceBlock}>
                            <span className={style.priceName}>Усього:</span>
                            <span className={style.priceCount}>{props.totalAmount} UAH</span>
                        </div>
                        <div>
                            <button className={style.btnAccept}
                                    onClick={() => {alert("Дякуємо за замовлення :))")}}>
                                Оформити замовлення
                                <img src='/img/basket/arrow.svg'/>
                            </button>
                        </div>
                    </>
                }
            </div>
        </div>
    )
}