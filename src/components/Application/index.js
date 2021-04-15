import React from 'react';
import Counter from '../Counter';
import Headline from '../Headline';
import Description from '../Description';

const App = () => {
    return (
        <>
            <Headline title="Basic counter" />
            <Counter />
            <Description>this is a basic counter to explore react</Description>
        </>
    )
}

export default App;

