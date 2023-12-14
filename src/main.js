const { json } = require("express");
const express = require("express");
const app = express();
const secret = require("./secrets/secrets");
const router = require("./routers/router");

app.use(json());
app.use('/', router)

app.listen(secret.port, () =>
  console.log(`API Online em http://localhost:${secret.port}`)
);
