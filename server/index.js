require("dotenv").config()
const express = require("express");
const cors = require("cors")
const {GeneralError} = require("./utils/error.handling")
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204
}))




app.use("/api/posts", require("./routes/post.routes"))
app.use("/api/users", require("./routes/users.routes"))


app.use((err, req, res, next) => {
    if (err instanceof GeneralError) {
        return res.status(err.getCode()).json({
            status: 'error',
            message: err.message
        });
    }

    return res.status(500).json({
        status: 'error',
        message: err.message
    });
})

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`App is alive on http://localhost:${port} URL.`)
})