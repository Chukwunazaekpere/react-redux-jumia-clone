import * as actions from "../Actions/ActionTypes"
// import { appState } from "../Store/Store"


const productsReducer = (state = {}, action) =>{
    switch(action.types){
        case(actions.MARK_PRODUCT):
        return {
            ...state
        }

        default:
            return {
                ...state
            }
    }
}

export default productsReducer;