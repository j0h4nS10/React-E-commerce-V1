import { useState, useEffect } from "react";
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import Modaltext from "../Modal/modal";

/*const currency = "USD";
const amount = 20;

const ButtonWrapper = ({ showSpinner, amount }) => {
    const [orderId, setOrderId]  = useState(null);
    const style = {"layout":"vertical"};
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();
    // This value is from the props in the UI
    console.log(showSpinner, amount)
    
    useEffect(() => {
    dispatch({
      type: "resetOptions",
      value: {
        ...options,
        currency: currency,
      },
    });
  }, [currency, showSpinner]);

return (<>

{ (showSpinner && isPending) && <div className="spinner" /> }
            <PayPalButtons
                style={style}
                disabled={false}
                //forceReRender={[style]}
                forceReRender={[amount,currency,style]}
                fundingSource={undefined}
                createOrder={async (data, actions) => {
                    return actions.order
                      .create({
                        purchase_units: [
                          {
                            amount: {
                              value: amount,
                              currency_code: currency
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

export default ButtonWrapper */


//const amount = "2";

//const currency = "USD";

const style = { "layout": "vertical" };


const ButtonWrapper = ({ currency, showSpinner, amount }) => {

  const [{ options, isPending }, dispatch] = usePayPalScriptReducer(); 

  useEffect(() => {

    dispatch({

      type: "resetOptions",

      value: {

        ...options,

        currency: currency,

      },

    });

  }, [currency, showSpinner]);


  return (<>

    {(showSpinner && isPending) && <div className="spinner" />}

    <PayPalButtons

      style={style}

      disabled={false}

      forceReRender={[amount, currency, style]}

      fundingSource={undefined}

      createOrder={(data, actions) => {

        return actions.order

          .create({

            purchase_units: [

              {

                amount: {

                  currency_code: currency,

                  value: amount,

                },

              },

            ],

          })

          .then((orderId) => {

            // Your code here after create the order

            return orderId;

          });

      }}

      onApprove={function (data, actions) {

        return actions.order.capture().then(function () {
          // Your code here after capture the order|
          alert("Purchase Completed");
        });

      }}

    />

  </>

  );

}

export default ButtonWrapper