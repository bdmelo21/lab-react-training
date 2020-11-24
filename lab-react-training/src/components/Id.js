import React from 'react'

function IdCard (props) {
    return(<div>
    <p><strong>First name:</strong>{props.firstName}</p>
    <p><strong>Last name:</strong>{props.lastName}</p>
    <p><strong>Gender:</strong>{props.gender}</p>
    <p><strong>Height:</strong>{props.height}</p>
    <p><strong>Birth:</strong>{props.birth}</p>
    <img src={props.picture}></img>
    </div>
    )
}

export default IdCard