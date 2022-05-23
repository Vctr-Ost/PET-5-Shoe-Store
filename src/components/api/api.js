import axios from "axios";

const instance = axios.create({
    baseURL: 'https://628b6ca9667aea3a3e2f0066.mockapi.io/',
})




export const getItems = (setAllItems) => {
    return instance.get('items').then(response => setAllItems(response.data))
}

export const addToBusket = (item) => {
    instance.post('cart', item)
}
export const delFromBasket = (id) => {
    instance.delete(`cart/${id}`)
}
export const getBusket = (setBusket) => {
    const promise = instance.get('cart');
    promise.then(response => {
        setBusket(response.data)
    });
}