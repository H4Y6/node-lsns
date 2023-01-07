const express = require("express");

const app = express(); // app - веб-сервер
// // GET /contacts
// // GET /
app.get("/", (request, response) => {
  console.log(request.method);
  console.log(request.url);
  response.send("<h2>Home page</h2>");
});

app.get("/contacts", (request, response) => {
  console.log(request.method);
  console.log(request.url);
  response.send("<h2>Contacts page</h2>");
});

app.listen(3000, () => console.log("Server running"));

// const express = require("express");
// const app = express();
// app.listen(3000, () => console.log("Listening to port 3000"));
