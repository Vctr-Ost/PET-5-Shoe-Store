function App() {
    return (
        <div className='wrapper'>

            <div className='overlay'>
                <div className='busket'>
                    <h3>Корзина</h3>
                    <div className='busketItems'>
                        <div className='busketItem'>
                            <div className='imgBlock'>
                                <img src='/img/content/shoes/1.jpg'/>
                            </div>
                            <div className='body'>
                                <p className='busketHeader'>Чоловічі Кросівки Nike Blazer Mid Suede</p>
                                <p className='busketPrice'>800 UAH</p>
                            </div>
                            <button><img src='/img/content/basket/delete.svg'/></button>
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
                                <button><img src='/img/content/basket/delete.svg'/></button>
                            </div>
                        </div>
                    </div>
                    <div className='price'>
                        <span className='priceName'>Усього:</span>
                        <span className='priceCount'>1600 UAH</span>
                    </div>
                    <button>
                        Оформити замовлення
                    </button>
                </div>
            </div>


            <div className='container'>
                <header>
                    <div className='headerLeft'>
                        <img className='logo' src='/img/header/logo.svg'/>
                        <div>
                            <h3 className='headerTitle'>shoe store</h3>
                            <p className='headerSubTitle'>Магазин кращих шузів</p>
                        </div>
                    </div>
                    <ul className='headerRight'>
                        <li>
                            <img className='mmr' src='/img/header/basket.svg'/>
                            <span className='hSpan'>1205 UAH</span>
                        </li>
                        <li>
                            <img src='/img/header/favor.svg'/>
                        </li>
                        <li>
                            <img src='/img/header/profile.svg'/>
                        </li>
                    </ul>
                </header>
                <div className='content'>
                    <div className='head'>
                        <h1>Всі кросівки</h1>
                        <div className='search'>
                            <img src='/img/content/find.svg'/>
                            <input placeholder='Search shoe'/>
                        </div>
                    </div>
                    <div className='store'>
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
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
