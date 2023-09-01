import { useState } from "react";
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";


const ButtonWrapper = ({ showSpinner, amount }) => {
    const [orderId, setOrderId]  = useState(null);
    const style = {"layout":"vertical"};
    const [{ isPending }] = usePayPalScriptReducer();
    // This value is from the props in the UI
    

return (<>

{ (showSpinner && isPending) && <div className="spinner" /> }
            <PayPalButtons
                style={style}
                disabled={false}
                forceReRender={[style]}
                fundingSource={undefined}
                createOrder={async (data, actions) => {
                    return actions.order
                      .create({
                        purchase_units: [
                          {
                            amount: {
                              value: amount,
                              currency_code: 'USD'
                            },
                          },
                        ],
                      })
                      .then((orderId) => {
                        setOrderId(orderId);
                        return orderId;
                      });
                  }}
          
                  onApprove={function (data, actions) {
                    // Petición para guardar los datos de la compra y limpiar el carrito
                    return actions.order.capture().then(function () {
                      alert("producto cobrado")
                    });
                  }}
            />
            </>)
            }

export default ButtonWrapper
