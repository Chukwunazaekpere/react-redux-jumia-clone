import { combineReducers} from "redux"
import productsReducer from "./ProductsReducer"


const CombinedReducers = combineReducers({
    products: productsReducer,
    // users:
    // cart:
})

export default CombinedReducers;