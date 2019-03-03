import React, { Component } from 'react'

import stylesWrapper from '../HOC/stylesWrapper';

const ButtonOne = (props) => {
    return (
        <div>
            <button style={props.styles}>Button One</button>
        </div>
    )
}

export default stylesWrapper(ButtonOne)
