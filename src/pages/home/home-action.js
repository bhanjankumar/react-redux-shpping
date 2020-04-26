import * as ActionTypes from './home-constant';

export const getProducts = () => {
    return{
        type:ActionTypes.NAV_TO_PRODUCTS
    }
}
export const addCard = (data) =>{
    return{
        type:ActionTypes.NAV_TO_ADDCART,
        data:data
    }
}

export const applyFilter = (data,filterPrice) => {
    return {
        type:ActionTypes.NAV_APPLY_FILTER,
        data:data,
        filterPrice: filterPrice
    }
}
