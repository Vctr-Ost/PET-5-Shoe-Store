import Card from "./Card/Card";


export default function MainPage() {
    return (
        <div className='container'>
            <div className='content'>
                <div className='head'>
                    <h1>Всі кросівки</h1>
                    <div className='search'>
                        <img src='/img/content/find.svg'/>
                        <input placeholder='Search shoe'/>
                    </div>
                </div>
                <div className='store'>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
            </div>
        </div>
    )
}