import {PayPalScriptProvider,PayPalButtons} from "@paypal/react-paypal-js"
function CheckoutPage (){
    return (
        <div>
            <h1>CSEN 404 Course</h1>
            <p>Price : 20 Euro </p>
        
            
            <PayPalScriptProvider options={{"client-id":"J9AFYYK9PR3VA"}}>
                <PayPalButtons></PayPalButtons>
            </PayPalScriptProvider>
            
           
        
        </div>
        
        
    )
};
export default CheckoutPage;