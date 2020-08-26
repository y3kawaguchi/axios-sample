const httpClient = require("./httpClient");

const client = new httpClient("http://localhost:18888", "user", "pass");

client.get("/basicAuth", (status, data) => {
  console.log("response status is ", status);
  console.log("response data is ", data);
});
