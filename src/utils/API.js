import axios from "axios";


// get the api has all ocntect info 
export default {
  // Gets all users
  getUsers: function() {
    return axios.get("https://randomuser.me/api/?results=200&nat=us");
  }
};
