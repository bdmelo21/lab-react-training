import React from 'react'

function Random (props) {
    let min=Math.ceil(props.min);
    let max=Math.floor(props.max);
    return (
       Math.floor(Math.random() * (max - min+1)) + min
    )
}

export default Random 