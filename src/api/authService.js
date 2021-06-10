async function signIn(credentials) {
  console.log("*** In authService.js signIn. Credentials: ", credentials);
  let authData = {};

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

export const authService = { signIn };
