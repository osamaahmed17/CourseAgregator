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

  getCourses=(stateHandler) =>{
    axiosClient.get("https://launchpad-red.au-syd.mybluemix.net/agregator/api/courses").then((response)=>
    stateHandler({catalogue: response.data.courses})
    )
  }
  getAgents=(stateHandler) =>{
    axiosClient.get("https://launchpad-red.au-syd.mybluemix.net/agregator/api/agentprofile").then((response)=>
    stateHandler({agents: response.data.agents})
    )
  }

}

const instance = new API();
export default instance;
