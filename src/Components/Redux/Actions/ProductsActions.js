import * as actions from "./ActionTypes"

export const markProduct = (id) => {
    return{
        type: actions.MARK_PRODUCT,
        payload:{
            product_id: id
        }
    }
}

export const unmarkProduct = (id) => {
    return{
        type: actions.UNMARK_PRODUCT,
        payload: {
            product_id: id
        }
    }
}