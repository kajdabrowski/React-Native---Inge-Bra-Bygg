import { AuthProvider } from "../store/Auth";
//!! General Sign in
var authData = {};
async function signIn(credentials) {
  console.log("*** In authService.js signIn. Credentials: ", credentials);

  await fetch("http://90.227.149.201:5000/authenticate", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  })
    .then((response) => {
      console.log(
        "*** In authService.js signIn. response status: ",
        response.status
      );
      if (response.status >= 400 && response.status < 600) {
        throw new Error("Bad response from server");
      }
      return response.json();
    })
    .then((returnedResponse) => {
      authData = returnedResponse;
    })
    .catch((error) => {
      console.log(error);
    });

  console.log("*** In authService.js signIn. authData: ", authData);

  return authData;
}

//!! Tasks

export async function getClientTask() {
  
  try {
    const req = await fetch("http://90.227.149.201:5000/alltasks/:page", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + authData.token,
      },
    });
    const taskData = await req.json();
    console.log(taskData);
    return taskData;
  } catch (error) {
    console.log(error);
  }
}

//!! Messages

export async function getMessage() {
  try{
    const req = await fetch("http://90.227.149.201:5000/tasks/3/messages/1", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + authData.token,
      },
    });
    const messageData = await req.json();
    console.log(messageData);
    return messageData;
  } catch(error) {
    console.log(error);
  }
}




export const authService = { signIn, getClientTask, getMessage };
