import style from '../MainPage.module.scss';

export default function Card(props) {
    return (
        props.obj.map(item => {
            return (
                <div className={style.item}>
                    <div className={style.itemContent}>
                        <div className={style.like}>
                            <img src='/img/content/unlike.svg'/>
                        </div>
                        <div className={style.imgBlock}>
                            <img src={item.src}/>
                        </div>
                        <p className={style.itemName}>{item.name}</p>
                        <div className={style.priceBlock}>
                            <div>
                                <p className={style.priceName}>Ціна:</p>
                                <p className={style.count}>{item.price} UAH</p>
                            </div>
                            <button>
                                <img src='/img/content/add.svg'/>
                            </button>
                        </div>
                    </div>
                </div>
            )
        })

    )
}