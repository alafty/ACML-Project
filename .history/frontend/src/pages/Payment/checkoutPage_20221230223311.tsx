import {PayPalScriptProvider,PayPalButtons} from "@paypal/react-paypal-js"
function CheckoutPage (){
    return (
        <div>
            <h1>CSEN 404 Course</h1>
            <p>Price : 20 $ </p>
        
            
            <PayPalScriptProvider options={{ "client-id":"AXypfhfGlO8JqOFF37F8ee-kvk2uco1_OizH6Y7px0xtIiE5JBkjxT_NdwynuhYP9Y5YEmc9Puho7kv7"}}>
                <PayPalButtons createOrder={(data, actions) => {
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
          onApprove={async (data, actions) => {
            const details = await actions.order.capture();
            const name = details.payer.name.given_name;
            alert("Transaction completed by " + name);
          }}></PayPalButtons>
            </PayPalScriptProvider>
            
           
        
        </div>
        
        
    )
};
export default CheckoutPage;