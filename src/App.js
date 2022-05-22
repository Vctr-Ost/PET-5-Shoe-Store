import Header from "./components/Header/Header";
import MainPage from "./components/MainPage/MainPage";
import Busket from "./components/Busket/Busket";

const arr = [
    {name: 'Чоловічі Кросівки Nike Blazer Mid Suede', price: 3250, src: '/img/content/shoes/1.jpg'},
    {name: 'Чоловічі Кросівки Nike Air Max 270', price: 5400, src: '/img/content/shoes/2.jpg'},
    {name: 'Чоловічі Кросівки Nike Blazer Mid Suede', price: 6100, src: '/img/content/shoes/3.jpg'},
    {name: 'Кросівки Puma X Aka Boku Future Rider', price: 825, src: '/img/content/shoes/4.jpg'},
];

function App() {
    return (
        <div className='wrapper'>
            <Busket/>

            <Header/>
            <MainPage obj={arr}/>

        </div>
    );
}

export default App;
