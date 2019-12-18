import React from 'react';
import Aux from '../../hoc/Auxillary';

import Burger from '../../components/Burger/Burger';

// This will be converted to a functional component with hooks
class BurgerBuilder extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            ingredients: {
                salad: 1,
                bacon: 1,
                cheese: 2,
                meat: 2
            }
        };
    };

    render() {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <div>Build Controls</div>
            </Aux>
        );
    };

};

export default BurgerBuilder;