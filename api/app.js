const express = require("express");
const app = express();
const port = 4000;
app.use(express.static("/client/public"));
app.use(express.static("public")); //for s3 JS files

app.get("/", (req, res) => {
  res.send("Hello World!");
  let fileName = "/logo192.png";
  res.sendFile(fileName, function(err) {
    if (err) {
      console.log(err);
    } else {
      console.log("Sent:", fileName);
    }
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
