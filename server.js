const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");
const path = require("path");

const translate = require("@k3rn31p4nic/google-translate-api");

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// const googleApiText = () => {
// const query = req.query.text;
// var api_key = "AIzaSyCILLI8sVq5ftqBRYJihYq9Uq64XZI6NNM";
// var api_url = "https://translation.googleapis.com/language/translate/v2";
// var options = {
//   url: api_url,
//   form: { key: api_key, source: "en", target: "ko", q: query }
// };
// request.post(options, function(error, response, body) {
//   if (!error && response.statusCode == 200) {
//     res.writeHead(200, {
//       "Content-Type": "text/json;charset=utf-8",
//       "Access-Control-Allow-Origin": "*"
//     });
//     res.end(body);
//   } else {
//     res.status(response.statusCode).end();
//     console.log("error = " + response.statusCode);
//   }
// });
// };

app.get("/api/google", function(req, res) {
  const query = req.query.text;

  translate(query, { to: "ko" })
    .then(response => {
      res.writeHead(200, {
        "Content-Type": "text/json;charset=utf-8",
        "Access-Control-Allow-Origin": "*"
      });
      console.log(response.text);
      res.end(response.text);
    })
    .catch(err => {
      console.error(err);
    });
});

app.get("/api/papago", function(req, res) {
  const query = req.query.text;

  var client_id = "B2_TpR1ZYuee07b3JA6S";
  var client_secret = "4U3GXjHKeD";
  var api_url = "https://openapi.naver.com/v1/papago/n2mt";

  var options = {
    url: api_url,
    form: { source: "en", target: "ko", text: query },
    headers: { "X-Naver-Client-Id": client_id, "X-Naver-Client-Secret": client_secret }
  };

  request.post(options, function(error, response, body) {
    if (!error && response.statusCode == 200) {
      res.writeHead(200, {
        "Content-Type": "text/json;charset=utf-8",
        "Access-Control-Allow-Origin": "*"
      });
      res.end(body);
    } else {
      res.status(response.statusCode).end();
      console.log("error = " + response.statusCode);
    }
  });
});

if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static(path.join(__dirname, "client/build")));

  // Handle React routing, return all requests to React app
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));
