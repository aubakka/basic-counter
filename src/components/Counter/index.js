import React, { useState } from 'react';
import { StyledButton, StyledCounter } from './styles'

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        setCount(count - 1)
    }

    return (
        <>
            <StyledCounter color="gray">Counter : {count} </StyledCounter>
            <div>
                <StyledButton color="green" onClick={increment}>+</StyledButton>
                <StyledButton color="red" onClick={decrement}>-</StyledButton>
            </div>
        </>
    )
}

export default Counter