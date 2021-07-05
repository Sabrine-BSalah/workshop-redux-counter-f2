import { DECREMENT, INCREMENT } from "../Actions/ActionsType"

const initState = {
    count: 0
}

const CounterReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case INCREMENT: return { ...state, count: state.count + payload }
        case DECREMENT: return { ...state, count: state.count > 0 ? state.count - payload : state.count }
        default: return state
    }
}

export default CounterReducer