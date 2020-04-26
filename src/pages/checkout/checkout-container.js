import {connect} from 'react-redux';

import CheckoutComponent from './components/checkout';
import * as action from './checkout-action';


const mapStateToProps = (state, currentProps) => {
    const addedCartData = state.home.addCartData;
    return{
        addedCartData
    }
}

export default connect(mapStateToProps,action)(CheckoutComponent);