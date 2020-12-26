import React from 'react'
import Spinner from '../spinner/spinner.component';

const WithSpinner = (WrappedComponent) => {
    const spinner = ({isloading, ...otherProps}) =>
        (isloading ?
            <Spinner /> :
            (<WrappedComponent {...otherProps} />));
    return spinner;
}

export default WithSpinner;