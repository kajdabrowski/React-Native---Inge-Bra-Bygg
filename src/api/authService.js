import { AuthProvider } from "../store/Auth";

var authData = {};
async function signIn(credentials) {
  console.log("*** In authService.js signIn. Credentials: ", credentials);

  await fetch("http://192.168.0.13:5000/authenticate", {
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

//Testing with tasks

export async function getClientTask() {
  const taskData = {};
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
  } catch (error) {
    console.log(error);
  }
  return taskData;
}

// async function getTaskById() {
//   let taskData = {}
//   await fetch("http://90.227.149.201:5000/tasks",{
//     method: "GET",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//       Authorization: "Bearer"
//     },

//   })

//   .then((response)=>{
//     console.log(response.status)
//   })

//   // const req = await fetch("http://90.227.149.201:5000/tasks");
//   // const data = await req.json();
//   // console.log(data);
//   return data;
// }

// få functionen getclienttasks att visas i terminalen.
// koppla getclienttask till knappen i taskscreen
// eventuellt id ?
// i tasklist screen kunna lista alla tasks med presshandle knapp

/*1 - Api, i authService, fetcha från backenden och koppla funktionerna. Logga resultatet från funktionen till terminalen.
  2 - Store, i Auth.js, skapa en taskContext för state/data som alla taskfunktioner kommer använda sig av. 
  3 - Screens, alla de screens som kommer konsumera tasks. Här kan vi koppla getclienttask till knappen i taskscreen som test. 
  4 -  i tasklist screen kunna lista alla tasks med presshandle knapp
*/

export const authService = { signIn, getClientTask };
