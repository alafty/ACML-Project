import {PayPalScriptProvider,PayPalButtons} from "@paypal/react-paypal-js"
function CheckoutPage (){
    return (
        <div>
            <h1>CSEN 404 Course</h1>
            <p>Price : 20 Euros </p>
        
            
            <PayPalScriptProvider options={{"client-id":""}}>
                <PayPalButtons></PayPalButtons>
            </PayPalScriptProvider>
            
           
        
        </div>
        
        
    )
};
export default CheckoutPage;