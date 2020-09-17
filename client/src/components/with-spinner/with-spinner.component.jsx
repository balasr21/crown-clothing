import React from 'react'
import { SpinnerOverlay, SpinnerContainer } from './with-spinner.styled';

const WithSpinner = (WrappedComponent) => {
    const spinner = ({isloading, ...otherProps}) =>
        (isloading ?
            (<SpinnerOverlay>
                <SpinnerContainer />
            </SpinnerOverlay>) :
            (<WrappedComponent {...otherProps} />));
    return spinner;
}

export default WithSpinner;