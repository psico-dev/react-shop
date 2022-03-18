import React from "react";
import { AppContext } from "../context/AppContext"
import { useNavigate } from "react-router-dom"
import { PayPalButton } from "react-paypal-button-v2";
import "../styles/components/Payment.css"

function Payment ({ history }) {

  const { state, addNewOrder } = React.useContext(AppContext)
  const { cart } = state
  const navigate = useNavigate()

  const paypalOptions = {
    clientId: "fjxwynbvcgwvczws$edd9189009989c956d0942b45e142c8f",
    intent: "capture",
    currency: "USD",
  }

  const buttonStyle = {
    layout: "vertical",
    shape: "rect"
  }

  const handlePaymentSuccess = (data) => {
    if (data.status === 'COMPLETED') {
      console.log("funciono")
      const newOrder = {
        buyer,
        product: cart,
        payment: data
      }
      console.log("otra cosa")
      addNewOrder(newOrder);
      navigate('/checkout/success')
    }
  }


  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.price
    const sum = cart.reduce(reducer, 0)
    return sum
  }

  

  return(
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resument del pedido:</h3>
        {cart.map(item => (
          <div className="Payment-item" key={item.title}>
            <div className="Payment-element">
              <h4>{item.title}</h4>
              <span>
                ${''}{item.price}
              </span>
            </div>
          </div>
        ))}
        <div className="Payment-button">
          <PayPalButton 
            paypalOptions={paypalOptions}
            buttonStyles={buttonStyle}
            amount={handleSumTotal()}
            onSuccess={data => handlePaymentSuccess(data)}
            onError={error => console.log(error)}
            onCancel={data => console.log(data)}
          />
        </div>
      </div>
      <div />
    </div>
  )
}

export { Payment }