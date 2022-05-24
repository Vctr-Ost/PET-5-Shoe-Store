import axios from "axios";

const instance = axios.create({
    baseURL: 'https://628b6ca9667aea3a3e2f0066.mockapi.io/',
})




export const getItems = (setAllItems) => {
    return instance.get('items').then(response => setAllItems(response.data))
}
export const changeItem = (item) => {
    return instance.put(`items/${item.id}`, {
        ...item,
        isInBusket: (item.isInBusket) ? false : true,
    }).then(response => response.data)
}
export const changeItemFavourite = (item) => {
    return instance.put(`items/${item.id}`, {
        ...item,
        isFav: (item.isFav) ? false : true,
    }).then(response => response.data)
}



export const getTotalAmount = (setTotalAmount) => {
    return instance.get('totalAmount/1').then(response => setTotalAmount(Number(response.data.amount)));
}
export const updateTotalAmount = (amount) => {
    return instance.put('totalAmount/1', {"id": "1", "amount": amount}).then(response => response.data)
}



export const getFavor = (setFavItems) => {
    return instance.get('favor').then(response => setFavItems(response.data))
}
export const addFavor = (item) => {
    return instance.post('favor', {item})
}