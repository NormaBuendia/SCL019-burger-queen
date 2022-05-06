import menu from "../../data/menu"
import { TYPES } from "../actions/ActionsCart"

const products = menu.items
const cart = []


export function orderReducer(state,action){
    switch(action.type){
        case TYPES.ADD_TO_CART:{

        }
        case TYPES.REMOVE_ONE_FROM_CART: {

        }
        case TYPES.REMOVE_ALL_FROM_CART{

        }
        case TYPES.CLEAR_CART{

        }
        default:
            return state;

    }
}
