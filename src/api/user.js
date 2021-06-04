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
export async function userLogin(user) {
  let result = await fetch("http://localhost:5000/authenticate", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  let data = await result.json();
  return data;
}

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
  
