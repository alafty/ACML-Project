import qs from "qs";
import httpClient from "../../utils/httpClient";
import { instruct } from "./viewInstructors";
function UpdateInstructor () {
    const updateInstructor = async (
        username:String,
        email: String,
        password: String,
        shortbio: String
      
      ) => {
        var data = qs.stringify({
          Username : username,
          Email: email,
          Password: password,
          ShortBio: shortbio
      
        });
        var config = {
          method: "post",
          url: "/create/instructor",
          data: data,
        };
      
        httpClient(config)
          .then(function (response) {
           
          })
          .catch(function (error) {
            console.log(error);
          });
      };
    }
    return (
        <h1>{instruct[0].Username}</h1>
    )
}
export default UpdateInstructor