import Header from "./components/Header/Header";
import MainPage from "./components/MainPage/MainPage";
import Busket from "./components/Busket/Busket";
import {useEffect, useState} from "react";
import {
    addFavor,
    changeItem,
    changeItemFavourite,
    getFavor,
    getItems,
    getTotalAmount,
    updateTotalAmount
} from "./components/api/api";
import {Route, Routes} from "react-router-dom";
import Favor from "./components/Favor/Favor";
import Profile from "./components/Profile/Profile";


function App() {

    const [allItems, setAllItems] = useState([]);   //! set items
    useEffect(() => {
        getItems(setAllItems);
        getTotalAmount(setTotalAmount);
    }, []);

    const [totalAmount, setTotalAmount] = useState(0);  //! Total amount (сума покупки)
    const changeTotalAmount = (cost) => {
        let newAmount = Number(totalAmount) + cost
        updateTotalAmount(newAmount)
            .then(data => {
                setTotalAmount(data.amount);
            })
    }

    const [busketOpened, setBusketOpened] = useState(false);    //! Open / Close busket menu
    const onBusketAction = () => {
        setBusketOpened(!busketOpened)
    }

    const [searchValue, setSearchValue] = useState('');     //! Find input
    const onSearchInput = (event) => {
        setSearchValue(event.target.value)
    }

    const changeItemInBusket = (item) => {      //! Add / Remove from busket
        changeItem(item).then(data => getItems(setAllItems));
        item.isInBusket ? changeTotalAmount(-item.price) : changeTotalAmount(item.price);
    }


    const changeFav = (item) => {
        changeItemFavourite(item).then(data => getItems(setAllItems));
    }


    return (
        <div className='wrapper'>
            {busketOpened ?
                <Busket obj={allItems} showBusket={onBusketAction} changeItemInBusket={changeItemInBusket}
                        totalAmount={totalAmount}/> : null}
            <Header showBusket={onBusketAction} totalAmount={totalAmount}/>
            <Routes>
                <Route path='/' element={
                    <MainPage obj={allItems} searchValue={searchValue} setSearchValue={setSearchValue}
                              onSearchInput={onSearchInput} changeItemInBusket={changeItemInBusket}
                              changeFav={changeFav}/>
                }/>
                <Route path='/favor' element={<Favor obj={allItems} changeItemInBusket={changeItemInBusket}
                                     changeFav={changeFav}/>}/>
                <Route path='/profile' element={<Profile/>}/>
            </Routes>
        </div>
    );
}

export default App;
