import Header from "./components/Header/Header";
import MainPage from "./components/MainPage/MainPage";
import Busket from "./components/Busket/Busket";
import {useEffect, useState} from "react";
import {addToBusket, delFromBasket, getBusket, getItems} from "./components/api/api";


function App() {

    const [busketOpened, setBusketOpened] = useState(false);
    const onBusketAction = () => {
        setBusketOpened(!busketOpened)
    }


    const [allItems, setAllItems] = useState([]);
    useEffect(() => {
        getItems(setAllItems);
        getBusket(setBusket);
    }, []);


    const [busket, setBusket] = useState([]);
    const addToCart = (item) => {
        addToBusket(item);
        setBusket([...busket, item]);
    }
    const delFromCart = (id) => {
        delFromBasket(id);
        setBusket(prev => prev.filter(item => item.id !== id));
    };


    const [searchValue, setSearchValue] = useState('');
    const onSearchInput = (event) => {
        setSearchValue(event.target.value)
    }


    return (
        <div className='wrapper'>
            {busketOpened ? <Busket showBusket={onBusketAction} busketItems={busket}
                                    delFromCart={delFromCart}/> : null}
            <Header showBusket={onBusketAction}/>
            <MainPage obj={allItems} addToCart={addToCart} searchValue={searchValue} setSearchValue={setSearchValue}
                      onSearchInput={onSearchInput}/>

        </div>
    );
}

export default App;
