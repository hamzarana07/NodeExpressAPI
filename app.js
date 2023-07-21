const express = require("express");
const app = express();
const connectDB = require("./db/connect");
require("dotenv").config();
const tasks = require("./routes/tasks");
const notFound = require("./middleware/not-found");
const path = require("path");

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use("/api/v1/tasks", tasks);

// Move the catch-all middleware to the end
const indexPath = path.join(__dirname, "public", "index.html");
app.get("/", (req, res) => {
  res.sendFile(indexPath);
});
app.use(notFound);

const port = 8000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL);
        app.listen(port, () => {
            console.log(
                `Server listening on: http://localhost:${port}/api/v1/tasks`
            );
        });
    } catch (error) {
        console.error(error);
    }
};

start();