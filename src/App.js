function App() {
    return (
        <div className='wrapper'>
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
                        <div className='findItem'>
                            <img src='/img/content/find.svg'/>
                            <input/>
                        </div>
                    </div>
                    <div className='store'>
                        <div className='item'>
                            <div className='itemContent'>
                                <div className='imgBlock'>
                                    <img src='/img/content/shoe.jpg'/>
                                </div>
                                <p className='itemName'>Чоловічі Кросівки Nike Blazer Mid Suede</p>
                                <div className='priceBlock'>
                                    <div>
                                        <p className='priceName'>Ціна:</p>
                                        <p className='count'>800 UAH</p>
                                    </div>
                                    <button>
                                        <img src='/img/content/plus.svg'/>
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
