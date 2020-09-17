import React from 'react'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-icon.svg';
import { connect } from 'react-redux';
import {toggleCartView} from '../../redux/cart/cart.actions';
import {selectCartItemsCount} from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import '../cart/cart-icon.styles.scss';

const CartIcon = ({toggleCartView,itemCount}) => (
    <div className='cart-icon' onClick={toggleCartView}>
      <ShoppingIcon className='shopping-icon' />
<span className='item-count'>{itemCount}</span>
    </div>
  );
 
  const mapDispatchToProps=dispatch=>({
    toggleCartView:()=>dispatch(toggleCartView())
  })


  const mapStateToProps= createStructuredSelector({
    itemCount:selectCartItemsCount
  })

  export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);
