import app from "./app";
const port = process.env.PORT || 8080;

app.listen(port, "0.0.0.0");
console.log(`Listening at http://localhost:${port}`);