import {PayPalScriptProvider,PayPalButtons} from "@paypal/react-paypal-js"
function CheckoutPage (){
    return (
        <div>
            <h1>CSEN 404</h1>
        
            
            <PayPalScriptProvider options={undefined}>
                <PayPalButtons></PayPalButtons>
            </PayPalScriptProvider>
            
           
        
        </div>
        
        
    )
};
export default CheckoutPage;