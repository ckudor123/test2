import React from 'react';

const addClassUpdates = (WrappedComponent) => {

    return class Hoc extends React.Component {
        componentDidMount() {
            console.log('gigi');
        }

        render() {
            return <WrappedComponent />
        }
    }
};

export default addClassUpdates;