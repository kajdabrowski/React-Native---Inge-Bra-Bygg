async function signIn(credentials) {
  console.log("*** In authService.js signIn. Credentials: ", credentials);
  let authData = {};

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

   function getClientTask() {
    console.log("heyyyyy")
  // const req = await fetch("http://90.227.149.201:5000/tasks");
  // const data = await req.json();
  // console.log(data);
  // return data;
}

// få functionen getclienttasks att visas i terminalen.
// koppla getclienttask till knappen i taskscreen
// eventuellt id ?
// i tasklist screen kunna lista alla tasks med presshandle knapp


export const authService = { signIn, getClientTask };
