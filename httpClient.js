// enable intellisense and autocomplete
const axios = require("axios").default;

module.exports = class HttpClient {  
  constructor() {
    const client = axios.create({
      // const url = "http://localhost:18888";
      // const username = "user";
      // const password = "pass";
    
      baseURL: "http://localhost:18888",
      auth: {
        username: "user",
        password: "pass"
      }
    });
    this.client = client;
  }
  
  get() {
    this.client.get("/basicAuth")
      .then(res => {
        // handle success
        console.log(res.data);
      })
      .catch(err => {
        // handle error
        console.log(err.data);
      })
      .then(() => {
        // always executed
        console.log("always executed");
      });
  }
//  handler();  
}
