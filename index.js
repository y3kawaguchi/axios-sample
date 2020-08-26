// enable intellisense and autocomplete
const axiosBase = require("axios").default;

const url = "http://localhost:18888";
const username = "user";
const password = "pass";

const axios = axiosBase.create({
  baseURL: url,
  auth: {
    username: username,
    password: password
  }
});

async function handler() {
  await axios.get("/basicAuth")
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
handler();