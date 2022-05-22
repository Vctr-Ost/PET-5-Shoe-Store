import Header from "./components/Header/Header";
import MainPage from "./components/MainPage/MainPage";
import Busket from "./components/Busket/Busket";

function App() {
    return (
        <div className='wrapper'>
            <Busket/>

            <Header/>
            <MainPage/>
        </div>
    );
}

export default App;
