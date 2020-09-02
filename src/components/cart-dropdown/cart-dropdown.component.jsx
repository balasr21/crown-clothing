import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartView } from '../../redux/cart/cart.actions';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router';
import '../cart-dropdown/cart-dropdown.styles.scss';

const CartDropDown = ({ cartItems, history, dispatch }) => {
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {
                    cartItems.length ?
                        cartItems.map(item => (
                            <CartItem key={item.id} item={item}></CartItem>)) :
                        <span className='empty-message'>Your Cart is empty</span>
                }
            </div>
            <CustomButton onClick={
                () => {
                    history.push('/checkout');
                    dispatch(toggleCartView())
                }
            }>GO TO CHECKOUT</CustomButton>
        </div>
    )
}

const mapStateToProps = createStructuredSelector(
    {
        cartItems: selectCartItems
    }
)

export default withRouter(connect(mapStateToProps)(CartDropDown));