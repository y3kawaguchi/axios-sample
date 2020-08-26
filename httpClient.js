// enable intellisense and autocomplete
const axios = require("axios").default;

module.exports = class HttpClient {  
  constructor(url, username, password) {
    const client = axios.create({
      baseURL: url,
      auth: {
        username,
        password
      }
    });
    this.client = client;
  }
  
  get(path, callback) {
    return this.client.get(path)
      .then(res => callback(res.status, res.data))
      .catch(err => callback(err.response.status, err.response.data));
  }
}
