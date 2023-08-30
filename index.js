var express = require("express");
var cors = require("cors");
var app = express();

app.use(cors());
const jsonServer = require("json-server");
const auth = require("json-server-auth");

const app = jsonServer.create();
const router = jsonServer.router("db.json");

// /!\ Bind the router db to the app
app.db = router.db;

// You must apply the auth middleware before the router
app.use(auth);
app.use(router);
app.listen(3000, () => {
  console.log("Json server is running");
});
