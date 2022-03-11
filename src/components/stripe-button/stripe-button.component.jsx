import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


const StripeButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51Kbx8RBSJRmfvvOvETRCKiybplNIR7lOkhoI8HWlhIDNwrE1e1szSxTfzYX3Kkujy57Idkv7W7VrUH0FBZzABuRK00B4rwiuZT';

    const onToken = token => {
        console.log(token)
        alert("Payment successful")
    }

    return (
        <StripeCheckout 
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeButton;