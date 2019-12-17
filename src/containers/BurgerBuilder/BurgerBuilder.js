import React from 'react';
import Aux from '../../hoc/Auxillary';

import Burger from '../../components/Burger/Burger';

// This will be converted to a functional component with hooks
class BurgerBuilder extends React.Component {

    render() {
        return (
            <Aux>
                <Burger />
                <div>Build Controls</div>
            </Aux>
        );
    };

};

export default BurgerBuilder;