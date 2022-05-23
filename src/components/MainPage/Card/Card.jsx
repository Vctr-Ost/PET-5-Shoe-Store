import style from '../MainPage.module.scss';
import {useState} from "react";

export default function Card(props) {
    const [isAdded, setIsAdded] = useState(false);
    const onAddClick = (item) => {
        setIsAdded(!isAdded);

        props.addToCart({name: item.name, price: item.price, src: item.src})
    };

    const [isLiked, setIsLiked] = useState(false);
    const onLikeClick = () => {setIsLiked(!isLiked)};

    return (
        <div className={style.item}>
            <div className={style.itemContent}>
                <img className={style.like} onClick={onLikeClick}
                     src={isLiked ? '/img/content/like.svg' : '/img/content/unlike.svg'}/>
                <div className={style.imgBlock}>
                    <img src={props.src}/>
                </div>
                <p className={style.itemName}>{props.name}</p>
                <div className={style.priceBlock}>
                    <div>
                        <p className={style.priceName}>Ціна:</p>
                        <p className={style.count}>{props.price} UAH</p>
                    </div>
                    <button onClick={() => onAddClick(props)}>
                        <img src={isAdded ? '/img/content/added.svg' : '/img/content/add.svg'}/>
                    </button>
                </div>
            </div>
        </div>
    )
}
// '/img/content/add.svg'


// import style from '../MainPage.module.scss';
// // import {useState} from "react";
//
// export default function Card(props) {
//     // debugger
//     // const [isAdded, setIsAdded] = useState(false);
//     return (
//         <div className={style.item}>
//             <div className={style.itemContent}>
//                 <div className={style.like}>
//                     <img src='/img/content/unlike.svg'/>
//                 </div>
//                 <div className={style.imgBlock}>
//                     <img src={props.src}/>
//                 </div>
//                 <p className={style.itemName}>{props.name}</p>
//                 <div className={style.priceBlock}>
//                     <div>
//                         <p className={style.priceName}>Ціна:</p>
//                         <p className={style.count}>{props.price} UAH</p>
//                     </div>
//                     <button onClick={onClickPlus}>
//                         <img src='/img/content/add.svg'/>
//                     </button>
//                 </div>
//             </div>
//         </div>
//     )
// }