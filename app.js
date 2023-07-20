const express = require("express")
const app = express();
const connectDB = require('./db/connect');
require("dotenv").config()
const tasks = require("./routes/tasks")
const notFound = require("./middleware/not-found")

app.use(express.json());
app.use("/api/v1/tasks", tasks)
app.use(notFound)

const port = 8000

const start = async ()=>{
    try {
        await connectDB(process.env.MONGO_URL);
        app.listen(port, ()=>{
            console.log(`Server listening on: http://localhost:${port}/api/v1/tasks`)
        })
    } catch (error) {
        console.error(error)
    }
}

start()