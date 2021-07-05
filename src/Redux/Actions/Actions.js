import { DECREMENT, INCREMENT } from "./ActionsType"


export const increment = (payload) => {
    return {
        type: INCREMENT,
        payload
    }
}

export const decrement = (payload) => {
    return {
        type: DECREMENT,
        payload
    }
}