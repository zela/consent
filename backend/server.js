const express = require("express");

const app = express();
app.use(express.json());
const port = 8080;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// login username testUser and password testPassword

// server should return login.json when username and password is correct
// server should return errorcode 401 when username or password is incorrect

app.post("/login", (req, res) => {
  if (
    req.body.username === "testUser" &&
    req.body.password === "testPassword"
  ) {
    res.json({ token: "testUser" });
  } else if (
    req.body.username === "testUser_alt" &&
    req.body.password === "testPassword"
  ) {
    // send token for testUser1 as json object
    res.json({ token: "testUser_alt" });
  } else {
    res.status(401).send("Wrong username or password");
  }
});

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});

app.get("/consent_objects", (req, res) => {
  if (!req.headers.authorization) {
    return res.json({ error: "No credentials sent!" });
  }

  const token = req.headers.authorization.split(" ")[1];
  if (token === "testUser") {
    res.sendFile(`${__dirname}/consent_obj1.json`);
  } else if (token === "testUser_alt") {
    res.sendFile(`${__dirname}/consent_obj2.json`);
  } else {
    return res.json({ error: "Wrong token!" });
  }
});
