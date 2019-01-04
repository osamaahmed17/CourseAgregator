import AppHelper from "helpers/AppHelper.js";
import { axiosClient } from 'index.js';

class API {

  // POST requests

  registerUser (data) {
    axiosClient.post("user/register", {
      firstName: data.firstName,
      lastName: data.lastName,
      emailId: data.emailId,
      password: data.password,
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => console.log(error));
  }

  

}

const instance = new API();
export default instance;
