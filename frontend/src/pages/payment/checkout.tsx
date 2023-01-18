import Button from "@mui/material/Button";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useState } from "react";
import { useParams ,useNavigate} from "react-router-dom";
import { useGlobalState } from "../../App";
import { CustomTextField } from "../../components/TextField";
import courseServices from "../../app/CoursesServices";
function Checkout() {
  const [state,dispatch] = useGlobalState();    
  const navigation = useNavigate();
  const { id } = useParams();
  const [code, setCode] = useState("");
  const [free, setFree] = useState(false);


  const applyCode = () => {
    if (code == "adminadminKapiel") {
      //TODO: buy course
      setFree(true);
      console.log("Code correct :)");
    }
  };
  const buyCourse = () => {
    courseServices.BuyCourse(id);
    navigation('/home');

    
  };
  return (
    <div>

      <h1></h1>
      <p>Price : {free ? 0 : 0.01} $ </p>

      <PayPalScriptProvider
        options={{
          "client-id":
            "AcZocAeAMmHCb_NgOWYKu1JuVtN7R9A3onA53tQ6q50vvT9Cb01-n-c_LNhXXgxSOVULmaGF66d-Q553",
        }}
      >
        <PayPalButtons
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: "0.01",
                  },
                },
              ],
            });
          }}
          onApprove={async (data, actions) => {
            const details = await actions.order.capture();
            const name = details.payer.name.given_name;
            alert("Transaction completed by " + name);
          }}
        ></PayPalButtons>
      </PayPalScriptProvider>

      {free ? <p>Code Applied!</p> : <></>}

      <p style={{ verticalAlign: "center" }}>
        <CustomTextField
          id="text-field"
          placeholder="Coupon Code?"
          InputProps={{
            className: "text-field",
          }}
          onChange={(e) => {
            setCode(e.target.value);
          }}
        />
        <Button
          variant="contained"
          id="big-button-secondary"
          onClick={applyCode}
        >
          {" "}
          Apply Code{" "}
        </Button>
        {free ?
        <Button
          variant="contained"
          id="big-button-secondary"
          onClick={buyCourse}
        >
          {" "}
          Buy Course{" "}
        </Button>: <></>}
      </p>
    </div>
  );
}
export default Checkout;