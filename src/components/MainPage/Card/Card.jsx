export default function Card() {
    return (
        <div className='item'>
            <div className='itemContent'>
                <div className='like'>
                    <img src='/img/content/unlike.svg'/>
                </div>
                <div className='imgBlock'>
                    <img src='/img/content/shoes/1.jpg'/>
                </div>
                <p className='itemName'>Чоловічі Кросівки Nike Blazer Mid Suede</p>
                <div className='priceBlock'>
                    <div>
                        <p className='priceName'>Ціна:</p>
                        <p className='count'>800 UAH</p>
                    </div>
                    <button>
                        <img src='/img/content/add.svg'/>
                    </button>
                </div>
            </div>
        </div>
    )
}