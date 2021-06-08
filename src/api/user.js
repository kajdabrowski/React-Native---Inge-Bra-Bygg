// gets all client task

export async function getClientTask() {
  const req = await fetch("http://localhost:5000/tasks");
  const data = await req.json();
  return data;
}

// gets all worker task
export async function getWorkerTask() {
  const req = await fetch("http://localhost:5000/tasks");
  const data = await req.json();
  return data;
}

// sends user email and password and authenticated user can login
<<<<<<< HEAD
export async function userLogin(user) {
  let result = await fetch("http://localhost:5000/authenticate", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      headers: {Bearer : token}
    },
    body: JSON.stringify(user),
  });
  let data = await result.json();
  return data;
=======
export async function login() {
  const myHeaders = new Headers();

  myHeaders.append('Content-Type', 'application/json');
  myHeaders.append('Authorization', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwibmFtZSI6IldvciBLZXIiLCJlbWFpbCI6IndvcmtlckB3b3JrZXIuY29tIiwicm9sZSI6IndvcmtlciIsImlhdCI6MTYyMTUwMTQ5NH0.hqxgxOZtMfsquX3arhJO5j1pUyOt6fCAB9emZ5Ri_eE");
  
  return fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'GET',
    headers: myHeaders,
  })
    .then(response => response.json())
    .then((user) => {
      console.log(user.name);
      console.log(user.password);
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
>>>>>>> 80400df59451c08c65440f41fefe076dbe2d0206
}

export async function getUsers() {
  var handleError = function (err) {
    console.warn(err);
    return new Response(
      JSON.stringify({
        code: 400,
        message: "Stupid network Error",
      })
    );
  };

  const result = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  ).catch(handleError);
  const data = await result.json();
  return data;
}

/*fetch("http://httpstat.us/500")
  .then(handleErrors)
  .then(response => response.json() )
  .catch(error => console.log(error) );*/

// registers a new user and sends  to user databse
export async function register(user) {
  let result = await fetch("http://localhost:5000/users", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  let data = await result.json();
  console.log(data);
}

//User create task by Worker role
export async function createTask(Task, token = "") {
  let a = [];
  Task.forEach((element) => {
    a.push(element._id);
  });
  let sendTask = {
    timeStamp: Date.now(),
    status: "inProcess",
    taskValue: 999,
    items: a,
  };

  let result = await fetch("http://localhost:5000/tasks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: token,
    },
    body: JSON.stringify(sendTask),
  });
  let y = await result.json();
  console.log(y);
}

//create message by both roles
export async function createMessage(Message, token = "") {
  let a = [];
  Message.forEach((element) => {
    a.push(element._id);
  });
  let sendMessage = {
    timeStamp: Date.now(),
    status: "inProcess",
    MessageValue: 999,
    items: a,
  };

  let result = await fetch("http://localhost:5000/tasks/id/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: token,
    },
    body: JSON.stringify(sendMessage),
  });
  let y = await result.json();
  console.log(y);
}
