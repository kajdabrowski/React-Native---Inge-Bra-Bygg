import axios from "axios";

// Create axios client, pre-configured with baseURL
let APIKit = axios.create({
  baseURL: "http://192.168.1.204:5000",
  timeout: 10000,
});
//this function will be importd into login context and used in login screen where login is
export async function authenticate(email,password){
    const response = await APIKit.post('/authenticate',{email ,password})
    console.log(response.status)
    console.log(response.data)
    
    
     


}
// Set JSON Web Token in Client to be included in all calls
export const setClientToken = (token) => {
  APIKit.interceptors.request.use(function (config) {
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  });
};


export default APIKit;
