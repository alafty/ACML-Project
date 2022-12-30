import {PayPalScriptProvider,PayPalButtons} from "@paypal/react-paypal-js"
function CheckoutPage (){
    return (
        <div>
            <h1>CSEN 404 Course</h1>
            <p>Price : 20 Euros </p>
        
            
            <PayPalScriptProvider options={{"client-id":"J9AFYYK9PR3VA"}}>
                <PayPalButtons   createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: "20.00",
                  },
                },
              ],
            });
          }}
          
          ></PayPalButtons>
            </PayPalScriptProvider>
            
           
        
        </div>
        
        
    )
};
export default CheckoutPage;