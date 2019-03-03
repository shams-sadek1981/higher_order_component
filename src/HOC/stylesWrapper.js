// import React from 'react'

import commonStyles from './commonStyles'

const translateProps = (props) => {
    let _styles = { ...commonStyles.default }

    if(props.disable) {
        _styles = {..._styles, ...commonStyles.disable }
    }

    let newProps = { ...props, styles: _styles }

    return newProps;
}

// export default (WrappedComponent) => {

//     return function wrappedRender(args){
//         return WrappedComponent(translateProps(args))
//     }
// }

export default (WrappedComponent) => args => WrappedComponent(translateProps(args))