import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const onToken = token => {
    console.log(token);
    alert('Payment Successful')

}

const StripeCheckButton = ({ price }) => {
    const priceInCentsForStripe = price * 100;
    const publishableKey = 'pk_test_51HO9hhAxxHv4aPQa00hYeO2D1b2ZluPUDijpjEO8epFaDiqyhvyM1uxs87mjD47B6yNhmN3RjNLS7s1JWIbEX0EB00uXMxfAdd';

    return (
        <StripeCheckout
            label='Pay Now'
            name='CROWN CLothing Ltd.'
            billingAddress
            shippingAddress
            image='https:svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceInCentsForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckButton;