import React, {useState} from 'react';

function PackWithState(props) {

    const [value, setValue] = useState(0);

    return (
        <p onClick={() => setValue(value + 1)}
        >my statedr value: {value}</p>
    )
}

export default PackWithState;