export default function Busket() {
    return (
        <div style={{ display: 'none' }} className='overlay'>
            <div className='busket'>
                <h3>Корзина</h3>
                <img className='closeBusket' src='/img/basket/delete.svg'/>
                <div className='busketItems'>
                    <div className='busketItem'>
                        <div className='imgBlock'>
                            <img src='/img/content/shoes/1.jpg'/>
                        </div>
                        <div className='body'>
                            <p className='busketHeader'>Чоловічі Кросівки Nike Blazer Mid Suede</p>
                            <p className='busketPrice'>800 UAH</p>
                        </div>
                        <button><img src='/img/basket/delete.svg'/></button>
                    </div>
                    <div className='busketItem'>
                        <div className='imgBlock'>
                            <img src='/img/content/shoes/1.jpg'/>
                        </div>
                        <div className='body'>
                            <p className='busketHeader'>Чоловічі Кросівки Nike Blazer Mid Suede</p>
                            <p className='busketPrice'>800 UAH</p>
                        </div>
                        <div>
                            <button><img src='/img/basket/delete.svg'/></button>
                        </div>
                    </div>
                    <div className='busketItem'>
                        <div className='imgBlock'>
                            <img src='/img/content/shoes/1.jpg'/>
                        </div>
                        <div className='body'>
                            <p className='busketHeader'>Чоловічі Кросівки Nike Blazer Mid Suede</p>
                            <p className='busketPrice'>800 UAH</p>
                        </div>
                        <button><img src='/img/basket/delete.svg'/></button>
                    </div>
                </div>
                <div className='priceBlock'>
                    <span className='priceName'>Усього:</span>
                    <span className='priceCount'>1600 UAH</span>
                </div>
                <div>
                    <button className='btnAccept'>
                        Оформити замовлення
                        <img src='/img/basket/arrow.svg'/>
                    </button>
                </div>
            </div>
        </div>
    )
}