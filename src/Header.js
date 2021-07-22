import React from 'react'

export default function header(props) {
    return (
        <div>
            <h1>Student Name is {props.name} and Rool no is {props.id}</h1>
        </div>
    )
}