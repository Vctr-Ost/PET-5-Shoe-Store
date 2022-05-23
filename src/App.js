import Header from "./components/Header/Header";
import MainPage from "./components/MainPage/MainPage";
import Busket from "./components/Busket/Busket";
import {useEffect, useState} from "react";
import {getItems} from "./components/api/api";


function App() {

    const [busketOpened, setBusketOpened] = useState(false);
    const onBusketAction = () => {
        setBusketOpened(!busketOpened)
    }


    const [allItems, setAllItems] = useState([]);
    useEffect(() => {
        getItems(setAllItems)
    }, []);


    const [busket, setBusket] = useState([]);
    const addToCart = (item) => {
        setBusket([...busket, item]);
    }
    const delFromCart = (name) => {
        const NewBusket = busket.filter(item => {
            if (item.name !== name) return true;
            else return false;
        });
        setBusket(NewBusket);
    }


    return (
        <div className='wrapper'>
            {busketOpened ? <Busket showBusket={onBusketAction} busketItems={busket}
                                    delFromCart={delFromCart}/> : null}
            <Header showBusket={onBusketAction}/>
            <MainPage obj={allItems} addToCart={addToCart}/>

        </div>
    );
}

export default App;
