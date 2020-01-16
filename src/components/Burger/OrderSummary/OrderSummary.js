import React from 'react';
import Button from '../../UI/Button/Button';

import Aux from '../../../hoc/Auxillary';

const orderSummary = (props) => {

    const ingredientSummary = Object.keys(props.ingredients)
        .map(k => {
            return (
                <li key={k}>
                    <span style={{ textTransform: 'capitalize' }}>{k}</span>: {props.ingredients[k]}
                </li>)
        });



    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to Checkout?</p>
            <Button clicked={props.purchaseCanceled} btnType={"Danger"}>CANCEL</Button>
            <Button clicked={props.purchaseContinued} btnType={"Success"}>CONTINUE</Button>
        </Aux>
    );

};

export default orderSummary;