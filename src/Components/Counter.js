import React from 'react'
import { Button } from 'react-bootstrap'
import { decrement, increment } from '../Redux/Actions/Actions'
// import { connect } from 'react-redux'
import { useSelector, useDispatch } from 'react-redux'

const Counter = (props) => {

    const count = useSelector(state => state.count)
    const dispatch = useDispatch()

    const x = 10

    return (
        <div className="counterContainer">
            {/* Without hooks */}
            {/* <Button variant="dark" onClick={() => props.increment()}>Increment</Button>
            <h2 className="count">{props.count}</h2>
            <Button variant="dark" onClick={() => props.decrement()}>Decrement</Button> */}

            {/* With hooks */}
            <Button variant="dark" onClick={() => dispatch(increment(x))}>Increment</Button>
            <h2 className="count">{count}</h2>
            <Button variant="dark" onClick={() => dispatch(decrement(x))}>Decrement</Button>
        </div>
    )
}

// Before Hooks
// const mapStateToProps = state => {
//     return {
//         count: state.count
//     }
// }

// const mapDispatchToProps = dispatch => {
//     return {
//         increment: () => dispatch(increment()),
//         decrement: () => dispatch(decrement()),
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Counter)

export default Counter
