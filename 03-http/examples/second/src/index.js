const express = require("express")
const { router } = require("./routes")

const app = express()

app.use(express.json())
app.use(router)


app.listen(3333, () => console.log("server running at 3333"))
