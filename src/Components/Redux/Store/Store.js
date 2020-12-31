import { createStore, compose } from "redux"
import CombinedReducers from "../Reducer/CombinedReducer"

const appState = {
    products: [
        {
            id: 1,
            name: "Mc_vities"
        },

        {
            
        }

    ],

    users: [

    ],

    cart: [

    ]
}


export const store = createStore(
    CombinedReducers,
    appState,
    compose(
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)