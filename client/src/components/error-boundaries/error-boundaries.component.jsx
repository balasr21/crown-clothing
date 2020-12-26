import React from 'react';

import { ErrorImageOverlay, ErrorImageContainer, ErrorImageText } from './error-boundaries.styled';

class ErrorBoundary extends React.Component {
    constructor() {
        super();

        this.state = {
            hasErrored: false
        };
    }

    static getDerivedStateFromError(error) {
        return { hasErrored: true };
    }

    componentDidCatch(error, info) {
        console.log("Error captured in error Boundary "+error);
    }

    render() {
        if (this.state.hasErrored) {
            return <ErrorImageOverlay>
                <ErrorImageContainer imageUrl='https://i.imgur.com/A040Lxr.png'></ErrorImageContainer>
                <ErrorImageText>Sorry Something went wrong, Please refresh</ErrorImageText>
            </ErrorImageOverlay>
        }
        return this.props.children;
    }
}

export default ErrorBoundary;