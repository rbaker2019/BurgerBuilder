import React from 'react';
import Aux from '../../hoc/Auxillary';

// This will be converted to a functional component with hooks
class BurgerBuilder extends React.Component {

    render() {
        return (
            <Aux>
                <div>Burger</div>
                <div>Build Controls</div>
            </Aux>
        );
    };

};

export default BurgerBuilder;